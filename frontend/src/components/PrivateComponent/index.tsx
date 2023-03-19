// hooks
import { useSession } from "next-auth/react";

// types
import { Session } from "../../shared-types/session-nextauth";
export type PrivateComponentProps = {
	children: React.ReactNode;
};

// utils
import { clientSideRedirect } from "../../utils/frontend-redirect";

const PrivateComponent = ({ children }: PrivateComponentProps) => {
	// states
	const { data, status } = useSession();
	const session: Session = data;

	// check session state
	if (typeof window !== "undefined" && status === "loading") return null;

	if (!session && (!status || status === "unauthenticated"))
		return clientSideRedirect();

	return children;
};

export default PrivateComponent;
