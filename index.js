const core = require("@actions/core");

try {
  const current_version = core.getInput("current");
  const destination = core.getInput("current");
  const destination_version = get_target_version(destination);
  verify(current_version, destination_version);
} catch (error) {
  core.setFailed(error.message);
}

function get_target_version(dst) {
  if (dst === "git-tag") {
    return String.fromCharCode(...execSync("git tag -l"))
      .trim()
      .split("\n")
      .at(-1);
  } else {
    throw Error(`destination: ${dst} is unknown`);
  }
}

function verify(src, dst) {
  if (src.split(".").length !== dst.split(".").length) {
    throw Error(`we can't compare ${src} with ${dst}`);
  }
  if (parseInt(src.replaceAll(".", "")) <= parseInt(dst.replaceAll(".", ""))) {
    throw Error("please don't forget to bump version.");
  } else {
    console.log(src);
  }
}
