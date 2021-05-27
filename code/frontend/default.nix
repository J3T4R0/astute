with import <nixpkgs> {};
let
  buildLeinFromGitHub = { name, owner, repo, rev, sha256, cd }:
  stdenv.mkDerivation {
    name = name;
    src = fetchFromGitHub {
      owner = owner;
      repo = repo;
      rev = rev;
      sha256 = sha256;
    };
      buildInputs = [ leiningen ];
      buildPhase = ''
        # https://blog.jeaye.com/2017/07/30/nixos-revisited/
        export LEIN_HOME=$PWD/.lein
        mkdir -p $LEIN_HOME
        echo "{:user {:local-repo \"$LEIN_HOME\"}}" > $LEIN_HOME/profiles.clj
        cd ${cd}
        LEIN_SNAPSHOTS_IN_RELEASE=1 ${leiningen}/bin/lein uberjar
      '';
      installPhase = ''
        cp target/${repo}*-standalone.jar $out
      '';
  };
  reagent = buildLeinFromGitHub {
    name = "reagent";
    owner = "reagent-project";
    repo = "reagent-project";
    rev = "b0111872a9d4819264d0606e8a65e070439caefe";
    sha256 = "03wqq0rk2i7rhzpvlcv4hllv8m39sb2klsjziv3w5vrlxa75hqcj";
    cd = "src";
  };
in
  stdenv.mkDerivation {
    name = "diaconis.clj";
    src = ./.;
    buildInputs = [ clojure jdk ];
    shellHook = ''
    it () {
      java -cp ${tesser}:${matrix} clojure.main ${name}
    }
    '';
  }

