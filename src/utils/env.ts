require('dotenv').config();

export default interface Variables {

	DATABASE_URL: string;
}

class Env {
	public variables: Variables = {
		
		DATABASE_URL: this.getEnv('DATABASE_URL'),
	};

	private getEnv(envName: string): string {
		const result = process.env[envName] as string;
		if (!result) throw new Error(`Environment variable ${envName} not found`);
		return result;
	}
}
export const env = new Env();