# ![Astute](logo.png)
> Elixir (Phoenix) codebase containing shadow-cljs that adheres to spec and API.  

[![CircleCI](https://circleci.com/gh/gothinkster/elixir-phoenix-realworld-example-app.svg?style=svg)](https://circleci.com/gh/gothinkster/elixir-phoenix-realworld-example-app) [![codecov](https://codecov.io/gh/gothinkster/elixir-phoenix-realworld-example-app/branch/master/graph/badge.svg)](https://codecov.io/gh/gothinkster/elixir-phoenix-realworld-example-app)

This codebase was created to demonstrate a fully fledged backend application built with **Elixir and Phoenix** including CRUD operations, authentication, routing, pagination, and more.

## Installing / Getting started

To run this project, you will need to install the following dependencies on your system:

* [Elixir](https://elixir-lang.org/install.html)
* [Phoenix](https://hexdocs.pm/phoenix/installation.html)
* [PostgreSQL](https://www.postgresql.org/download/macosx/)

To get started, run the following commands in your project folder:

```shell
cp config/dev.exs.example config/dev.exs  # creates the project's configuration file
mix deps.get  # installs the dependencies
mix ecto.create  # creates the database.
mix ecto.migrate  # run the database migrations.
mix phx.server  # run the application.
```

This is a backend project, you won't be able to go to localhost:4000 and see an aplication. 

In order to see the [Conduit](https://demo.realworld.io/#/) frontend you will need to download and setup one of the [frontend projects](https://demo.realworld.io/#/) and set it up to consume this apps api. Typically this can be done by finding the `API_URL` and setting it to `localhost:4000`.

## Tests

To run the tests for this project, simply run in your terminal:

```shell
mix test
```

## Documentation

To generate the documentation, your can run in your terminal:

```shell
mix docs
```

This will generate a `doc/` directory with a documentation in HTML. To view the documentation, open the `index.html` file in the generated directory.

## Style guide

This project uses [mix format](https://hexdocs.pm/mix/master/Mix.Tasks.Format.html). You can find the configuration file for the formatter in the `.formatter.exs` file.


## Environment variables

This library supports nodejs process environment variables and [dotenv](https://github.com/motdotla/dotenv).

There is a convenience namespace `degree9.env` that inits dotenv and exposes the
native nodejs functionality.

See `.env.example` in the root of the repository for an example that can be
copied into place and updated with real secrets.

- `degree9.env/get`: Takes a key and optional fallback value, returns the value,
  fallback or empty string as appropriate. Accepts keyword and string keys in
  all casings. e.g.
  ```clojure
  (degree9.env/get :home) ; "/Users/foo"`
  (degree9.env/get "HOME") ; "/Users/foo"`
  ```
- `degree9.env/keys`: Returns the list of all available env map keywords.

## CLJS REPL

Using shadow cljs + node + REPL is the easiest way to develop without including
and rebuilding `enterprise` as an embedded dependency of some other repository.

We can't reliably use the browser REPL approach because some code must be
executed in node. For example, the Shopify API doesn't allow CORS, so browser
based POST is not an option.

Shadow CLJS is being used simply because it seemed to provide what we need and
I wasn't sure how to setup the equivalent through Boot.

All the REPL config for shadow is in `shadow-cljs.edn`.
The dependencies are being parsed from `shadow-cljs.edn` into `build.boot`.

The shadow CLJS docs are pretty good:

https://shadow-cljs.github.io/docs/UsersGuide.html

The default shadow cljs config is for `app` and targets `node-script`, but also
can support the `browser` target too (the config covers both options).

### Work with nix-shell

Nix can provide all the tooling needed to run tests and the repl.

This is how Circle CI is configured, using the official alpine based NixOS docker box.

If you don't already have nix-shell then install it:

https://nixos.org/nix/download.html

```
curl https://nixos.org/nix/install | sh
```

Nix will run `npm install` and set environment variables etc. when entering the shell.

This includes wrapping `shadow-cljs` so that it appears to be installed globally while in the shell (without installing it globally).

A few nix specific commands are available:

`flush`

Delete all built artifacts and dependencies that may become stale.

```
nix-shell --run flush
```

`node-test`

Run all the node tests under the `:node-test` shadow-cljs target.

```
nix-shell --run node-test
```

`browser-test`

Run all browser tests with `karma` against a headless firefox against the `:browser-test` shadow-cljs target.

On linux a copy of firefox will be shipped by nix-shell, on Mac you may need to BYO firefox.

```
nix-shell --run browser-test
```

### Install shadow CLJS

Shadow CLJS is a dev dependency for npm in this repo.

It might be easier to install it globally though:

`$ npm install -g shadow-cljs`

### Shadow CLJS + Node + REPL

First run `watch` to compile the needed JS file.

`$ shadow-cljs watch app`

This will start a REPL server, watch files and output to `repl-node/main.js`.

Next, in a new terminal tab, run the compiled file with node.

`$ node repl-node/main.js`

This will provide the execution context for the REPL, as a browser normally
would. All `prn` and console logs will show up here.

Finally, in a new terminal tab, start the CLJS REPL connected to the server.

`$ shadow-cljs cljs-repl app`

This allows for executing cljs code in the node execution environment.

Note that the `watch` command from shadow cljs WILL reload files dynamically but
does NOT automatically reload the _state_ of namespaces from the perspective of
the REPL.

To reload an already-loaded namespace, use `:reload` or `:reload-all`.

For example:

`(require 'degree9.repl :reload)`

Would allow edits to `degree9.repl/foo` to appear in the REPL client without
needing to stop and start the REPL server.

### Shadow CLJS + Browser + REPL

Edit `shadow-cljs.edn` so that the `:target` for `:app` is `:browser`.

Run the watch command:

`$ shadow-cljs watch app`

This will output compiled browser-friendly JS files to `repl-public/js/main.js`.

A web server will also be available at `http://localhost:8020`.

Open a browser (e.g. Chrome) to the localhost web server URL. All `prn` and
console logs will show up here.

In a new terminal tab, start the browser REPL.

`$ shadow-cljs browser-repl app`

Be careful not to refresh the browser as it can mess with the state of the REPL.

To reload namespaces, see the node instructions above.

### Shadow CLJS + Testing

Shadow CLJS runs tests for us too, but uses the `test` build rather than `app`.

The node test runner in shadow CLJS does NOT need a standalone node instance
running as it is configured with `:autorun`.

`$ shadow-cljs compile test`

