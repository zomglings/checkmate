const { Command } = require("commander");
const program = new Command();

program
  .name("checkmate")
  .description(
    "A Javascript tool that checks whether an event was emitted in a given block."
  )
  .version("0.0.1");

program
  .command("encode")
  .description("Encode an event with the given parameters")
  .option("--abi <string>", "Path to JSON file containing a contract ABI")
  .option("-n, --event <stringr>", "Name of event")
  .option("-p", "--params <string...>", "Parameters for the event, in order.")
  .action((options) => {
    console.log(options);
  });

program.parse();
