require('dotenv').config();

export default interface Variables {

	DATABASE_URL: string;
	// DATABASE_SCHEMA: string;
}

class Env {
	public variables: Variables = {
		
		DATABASE_URL: this.getEnv('DATABASE_URL'),
		// DATABASE_SCHEMA: this.getEnv('DATABASE_SCHEMA'),
	};

	private getEnv(envName: string): string {
		const result = process.env[envName] as string;
		if (!result) throw new Error(`Environment variable ${envName} not found`);
		return result;
	}
}
export const env = new Env();