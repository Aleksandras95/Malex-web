How to start working with project.

 1. You need node.js 13.5.0 or greater and yarn already installed ( https://nodejs.org/en/blog/release/v13.5.0/ )
 2. Open cmd and go to the projects folder 
 3. Run yarn install to install all needed dependencies 
 4. Run yarn start to build the new project, run local server and start watching changes 
 - 4.1 Run yarn build to build project 
 - 4.2 Run yarn test to test project
 - 4.3 Run yarn eject to clean build project
 
More information: [Create React App documentation]( https://facebook.github.io/create-react-app/docs/getting-started )
<div className ={"menu-toggle " + this.props.buttonClass}>
                   {this.props.showBtn ?(<button onClick={ this.open} type="button" className="btn btn-lg btn-secondary btn-hover-main-secondary btn-round p-0 min-w-auto" data-toggle="modal" data-target="#menu-modal"><i className="fas fa-bars"></i></button>) : null}
                </div>