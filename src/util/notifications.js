import AWN from "awesome-notifications"

// Set global options
let globalOptions =  {position: "top-right"}
// Initialize instance of AWN
let notifier = new AWN(globalOptions)

export {
    notifier
}