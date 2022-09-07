## Project structure information
<p style="font-size:1.5rem; font-style: italic;">Tooling and DB:</p>

- [x] # Front End
	- [x] Vuejs 3 Composition API
	- [x] Vite
	- [x] Pinia
	- [x] Typescript
	- [x] SCSS
	- [x] TailwindCSS v3
	- [x] Axios?
- [ ] # Back End
	- [x] C#
	- [ ] .NET Core Web API
	- [ ] SQL Server
	- [ ] Entity Framework

<p style="font-size:1.5rem; font-style: italic;">Project Structure:</p>

- [ ] Root
	- [x] docs
		- [x] project-structure-guide.md
		- [ ] data-definition-guide.md
	- [ ] public
		- [ ] favicon.ico
		- [ ] robots.txt
	- [ ] src
		- [ ] @types
			- [x] interfaces
				- [x] strain.interface
				- [x] modal.interface
				- [x] nav.interface
				- [x] response.interface
				- [x] root.interface
				- [x] user.interface
			- [x] index.d.ts
			- [x] global.d.ts
			- [ ] api.d.ts
			- [ ] appuser.d.ts
		- [ ] assets
			- [ ] scss
				- [ ] components
					- [ ] partials
						- [ ] _modal.scss
					- [ ] _module.scss
				- [ ] utils
					- [ ] partials
						- [ ] _helpers.scss
						- [ ] _mixins.scss
						- [x] _reset.scss
						- [ ] _typography.scss
						- [ ] _variables.scss
					- [ ] _module.scss
				- [ ] vendor
					- [x] _tailwind.css
				- [ ] _root.scss
				- [x] main.scss
			- [x] logo.png
		- [ ] components
			- [ ] base
				- [ ] form
					- [x] Form.vue
				- [ ] modal
					- [x] Modal.vue
				- [ ] nav
					- [x] TopNavbar.vue
			- [x] EntryPoint.vue
		- [ ] router
			- [ ] index.ts
		- [ ] services
			- [ ] mocked
				- [x] strains
					- [x] strains-data.json
				- [ ] locations?
					- [ ] location.json
				- [ ] appusers
					- [ ] appuser.json
				- [ ] api.ts
				- [ ] http-common.ts
				- [ ] http-exceptions.ts
		- [ ] store
			- [x] useLoadingStore.ts
			- [x] useModalStore.ts
			- [x] useNavStore.ts
			- [x] useRootStore.ts
			- [x] useStrainStore.ts
		- [ ] hooks
			- [x] global.ts
			- [x] useApi.ts
			- [x] useDarkMode.ts
		- [ ] views
			- [ ] Home.vue
			- [ ] About.vue
		- [x] App.vue
		- [x] main.ts
		- [ ] env.d.ts
	- [X] .editorconfig
	- [X] .gitignore
	- [x] index.ts
	- [X] package.json
	- [x] postcss.config.js
	- [ ] README.MD
	- [x] tailwind.config.js
	- [x] tsconfig.json
	- [x] vite.config.js



