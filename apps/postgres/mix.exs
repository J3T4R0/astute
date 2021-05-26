defmodule Postgres.MixProject do
  use Mix.Project

  def project do
    [
      app: :postgres,
      version: "0.1.0",
      elixir: "~> 1.10",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end
 
  defp aliases do
   [
     setup: ["deps.get"],
     test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"]
   ]
 end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
     {:ecto_sql, "~> 3.4"},
     {:postgrex, ">= 0.0.0"},
     {:jason, "~> 1.2"}
      # {:dep_from_hexpm, "~> 0.3.0"},
      # {:dep_from_git, git: "https://github.com/elixir-lang/my_dep.git", tag: "0.1.0"}
    ]
  end
end
