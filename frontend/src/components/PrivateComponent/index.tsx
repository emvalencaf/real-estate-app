// hooks
import { useSession } from "next-auth/react";

// components
import Spinner from "../Spinner";

// types
export type PrivateComponentProps = {
	children: React.ReactNode;
};

// utils
import { clientSideRedirect } from "../../utils/frontend-redirect";

const PrivateComponent = ({ children }: PrivateComponentProps) => {
	// states
	const { data, status } = useSession();

	// check session state
	if (typeof window !== "undefined" && status === "loading")
		return <Spinner />;

	if (!data && (!status || status === "unauthenticated"))
		return clientSideRedirect();

	return children;
};

export default PrivateComponent;
