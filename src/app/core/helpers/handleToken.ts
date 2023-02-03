import jwt_decode from 'jwt-decode';


const secret = new TextEncoder().encode(
	'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
);

export function hasExpired(jwt: string | null) {
	if (!jwt) {
		return true;
	}

	const { iat }: any = jwt_decode(jwt);

	return new Date().getTime() > iat;
}
