import { defineConfig } from 'tsup'

export default defineConfig({
	entryPoints: [`src/index.ts`],
	format: [`esm`, `cjs`],
	splitting: true,
	dts: true,
	clean: true,
	sourcemap: false,
	minify: true,
	treeshake: true,
})
