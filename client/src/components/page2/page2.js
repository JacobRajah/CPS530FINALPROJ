import Nav from "../navigation/navbar";
import ImageReelPic from "../../images/ImageReel.png";
import ContentPic from "../../images/Content.png";
import MainFuncPic from "../../images/MainFN.png";
import nodeInstallPic from "../../images/nodeinstall.png"
import './page2.css';

function Page2()
{
    return (
        <div className="p2">
            <Nav></Nav>
            <h1 className="main-title">Installing React.js and Express.js</h1>
            <div>
                <h2 className="section-header2">Installing React.js</h2>
                <section>
                    <p className="content2">
                        <b>Step 1: Download Node.js installer</b>
                        <br/>
                        Begin by naivating to <a href="https://nodejs.org/en/download/ ">https://nodejs.org/en/download/ </a>. 
                        Once there, click on the (Windows or MacOS) Installer button to download the latest version. The
                        Node.js installer includes the NPM package manager.
                        <br/><br/>
                        <img  className="nodeInstall" src={nodeInstallPic} alt="reel"></img>
                        <br/>
                        <figcaption className="figcaption-p1"> Figure 1. Node.js Download Page</figcaption>
                        <br/>
                        <br/>
                        <b>Step 2: Install Node.js and NPM</b>
                        <ol>
                            <li>Once the installer has finished downloading, launch it
                                by double-clicking on the file.
                            </li>
                            <li>The system will ask you if you want to run the software -
                                click Run.
                            </li>
                            <li></li>
                            <li>This will start the Node.js Setup Wizard - Click Next.</li>
                            <li>On the next screen, review the license agreement. Click
                                Next if you agree to the terms and install the software.
                            </li>
                            <li>The installer will prompt you for the installation location.
                                Leave the default location unless you have a specefic need
                                to install it somewhere else - click Next
                            </li>
                            <li>The wizard will let you select components to include or
                                remove from the installation. Unless you have a specifc need,
                                accept the defaults by clicking Next
                            </li>
                            <li>Click the Install button to run the installer. When it finishes,
                                click Finish.
                            </li>
                            </ol>
                        <b>Step 3: Verify Installation</b>
                        <br/>
                        <br/>
                        Open a command prompt (or PowerShell), and enter the following:
                        <pre>
                            <code>
                                node -v
                            </code>
                        </pre>
                        <br/>
                        The system should display the Node.js version installed on your system.
                        You can do the same for NPM:
                        <pre>
                            <code>
                                npm -v
                            </code>
                        </pre>
                        <br/>
                        <br/>
                        <b>How to Update Node.js and NPM on Windows</b>
                        <br/>
                        The easiest way to update Node.js and NPM is to download the latest version of
                        the software. On the Node.js download page, right below the Windows Installer link,
                        it will display the latest version. <br/>
                        To update, download the installer and run it. The setup wizard will overwrite
                        the old version and replace it with the newest version.
                        <br/>
                        <br/>
                        <b>How to Uninstall Node.js and NPM</b>
                        <br/>
                        TO uninstill: 
                        <br/>
                        <ol>
                            <li>Click the Start button > Settings (gear icon) > Apps</li>
                            <li>Scroll down to find Node.js and click to highlight </li>
                            <li>Select Uninstall. This launches a wizard to uninstall the software</li>
                          
                            </ol>
                    </p>

                </section>
                <br/>
                

                <br/>
                
                <section>
                <h2 className="section-header2">Installing Express.js</h2>
                    <p className="content2">
                        Assuming you've already insalled Node.js, create a directory to hold
                        your application, and make that your current working directory
                        <pre>
                            <code>
                                $ mkdir myapp 
                                <br></br>
                                $ cd myapp
                            </code>
                        </pre>
                        Use the npm init command to create a package.json file for your application
                        <pre>
                            <code>
                                $ npm init
                            </code>
                        </pre>
                        This command prompts you for a number of things, such as the name and version of
                        your application. For now, you can simply hit RETURN to accept the defaults for most
                        of them, with the following exception:
                        <pre>
                            <code>
                                entry point: (index.js)
                            </code>
                        </pre>
                        Enter app.js, or whatever you want the name of your main file to be. If you want it to
                        be index.js, hit RETURN to accept the suggested default file name.
                        Now install Express in the myapp directory and save it in the dependencies list. For
                        example:
                        <pre>
                            <code>
                                $ npm install express --save
                            </code>
                        </pre>
                        To install Express temporarily and not add it to the dependencies list:
                        <pre>
                            <code>
                                $ npm install express --no-save
                            </code>
                        </pre>
                        <br/>
                        
                    </p>
                    {/* <img className="img-snippet-1" src={MainFuncPic} alt="content"></img> */}
                </section>
                <br/>
            </div>
        </div>
    );
}

export default Page2;