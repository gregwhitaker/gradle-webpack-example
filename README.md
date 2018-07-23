# gradle-webpack-example
An example of building a Javascript application with Webpack and Gradle.

## Building the Project
You can build the project using the following Gradle command:

    $ ./gradlew clean build

This will bundle the javascript with webpack and create a zip file of the `dist` folder.

## Running the Project
You can run the project using the webpack-dev-server with the following Gradle command:

    $ ./gradlew webpackServer


## Bugs and Feedback
For bugs, questions, and discussions please use the [Github Issues](https://github.com/gregwhitaker/gradle-webpack-example/issues).

## License
Copyright 2018 Greg Whitaker

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.