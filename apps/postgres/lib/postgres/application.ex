def application do
   [
     mod: {Postgres.Application, []},
     extra_applications: [:logger]
   ]
 end
