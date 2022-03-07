# Alert
Provide bolck tool for alert or special message with indication of different type of colors. 
You can paste text or write on it and then convert it, with your preferred message or alert.

## Installation
Install via npm 

```bash
npm install editorjs-alert-uk
```
or via yarn 
```bash
yarn add editorjs-alert-uk
```
Include module at your application 

```javascript
import Alert from 'editorjs-alert-uk'
```
## Usage 
Add a new Tool to the tools property of the EditorJS's initial config.

```javascript
var editorjs=new EditorJS({
     ...
     tools:{ 
     ...
     alert:Alert
     }
     ...
     });
 ```
 
