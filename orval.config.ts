import { defineConfig } from 'orval';

export default defineConfig({
	api: {
		output: {
			mode: 'single',
			target: 'src/api/api.ts',
			schemas: 'src/api/models',
			client: 'axios-functions',
			httpClient: 'axios',
			override: {
				mutator: {
					path: 'src/api/client/client.ts',
					name: 'customAxiosInstance',
				},
			},
		},
		input: {
			target: 'samples/api.yaml',
		},
	},
});

