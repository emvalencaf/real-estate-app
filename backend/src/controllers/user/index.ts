// interface
import { Request, Response } from "express";
import UserRepository from "../../repository/user";

export default class UserController {
	// log in an user
	static async signIn(req: Request, res: Response) {
		const { email, password } = req.body;
		try {
			const response = await UserRepository.signIn({ email, password });

			if (!response)
				return res.status(404).send({
					data: null,
					success: false,
					message: "no user was found it",
				});

			const { user } = response;

			res.status(200).send({
				data: user,
				success: !!user,
				message: user
					? "you've successfully login"
					: "you've failed to login",
			});
		} catch (err) {
			console.log(err);
			res.status(500).send({
				data: null,
				success: false,
				message: "something went wrong on the server",
			});
		}
	}

	// register an user
	static async signUp(req: Request, res: Response) {
		const { name, email, password } = req.body;
		try {
			const responseAuth = await UserRepository.signUpAuth({
				name,
				email,
				password,
			});

			await UserRepository.signUp({ name, email }, responseAuth.uid);

			res.status(201).json({
				data: null,
				success: true,
				message: "your account was successufully created",
			});
		} catch (err) {
			console.log(err);
			res.status(500).json({
				data: null,
				success: false,
				message: "something went wrong on the server",
			});
		}
	}

	// register an user with google
	static async signInWithGoogle(req: Request, res: Response) {
		const { id_token } = req.body;
		try {
			const responseAuth = await UserRepository.signInWithGoogleAuth(
				id_token
			);

			const { user } = responseAuth;

			res.status(200).send({
				data: user,
				success: true,
				message: "you successfully log in with google",
			});
		} catch (err) {
			console.log(err);
			res.status(500).send({
				data: null,
				success: false,
				message: "server wasn't authorized to sign in with google",
			});
		}
	}

	// send an email to redefine a new password
	static async sendPasswordResetEmail(req: Request, res: Response) {
		const { email } = req.body;
		try {
			await UserRepository.sendPasswordResetEmail(email);

			res.status(200).send({
				data: null,
				success: true,
				message: "an email has been sent to the user's email",
			});
		} catch (err) {
			console.log(err);
			res.status(500).json({
				data: null,
				success: false,
				message: "something went wrong on the server",
			});
		}
	}

	// update an user profile
	static async updateUserProfile(req: Request, res: Response) {
		const { id } = req.params;
		try {
			if (id !== req.user?.uid)
				throw new Error("you cannot try update another user's details");

			const { name } = req.body;
			await UserRepository.updateUserProfile(id, name);

			res.status(200).send({
				data: null,
				success: true,
				message: "you successfully update your profile details",
			});
		} catch (err) {
			console.log(err);
			res.status(500).send({
				success: false,
				message: "something went wrong on the server",
			});
		}
	}

	// get an user details
	static async getUserDetails(req: Request, res: Response) {
		if (!req.user)
			return res.status(403).send({
				success: false,
				message: "forbiden access",
			});

		const { uid } = req.user;

		try {
			const user = await UserController.getUserById(uid);
			res.status(200).send({
				data: user,
				success: true,
				message: "succefully fetched user data",
			});
		} catch (err) {
			console.log(err);
			res.status(501).send({
				message: "something went wrong on the server",
			});
		}
	}

	// get an user by it's id
	static async getUserById(uid: string) {
		return await UserRepository.getUserById(uid);
	}

	// update real-estates at user profile

	static async updateUserRealEstate(realEstateUid: string, userUid: string) {
		if (!realEstateUid || !userUid)
			throw new Error("you must inform real estate uid and user uid");

		return UserRepository.updateUserRealEstate(realEstateUid, userUid);
	}
}
