module.exports = class WebpackAfterCompilePlugin {
    constructor(name, command, stage = 'done') {
        this.name = name;
        this.command = command;
        this.stage = stage;
    }

    apply(compiler) {
        compiler.hooks[this.stage].tap(this.name, (stats) => {

            setTimeout(()=> {
                this.command();
            }, 500);
        });
    }
}