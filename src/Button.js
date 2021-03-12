import React, { useState, useEffect } from 'react'
import './Button.css'
import ToggleButton from 'react-toggle-button'
//import Toggle from 'react-toggle'
import { ToggleSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { GithubPicker } from 'react-color'





const Button = () => {

    const [buttonType, setButtonType] = useState('Default');
    const [buttonValue, setButtonValue] = useState('Button');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonShadow, setButtonShadow] = useState(true);
    const [buttonStyles, setButtonStyles] = useState({})
    const [buttonIcon, setButtonIcon] = useState('add_shopping_cart')
    const [iconPlacement, setIconPlacement] = useState(true)
    const [buttonWidth, setButtonWidth] = useState('150')
    const [buttonHeight, setButtonHeight] = useState('70')
    const [buttonColor, setButtonColor] = useState('darkslategrey')

    useEffect(() => {

        if (buttonType === 'Default') {
            setButtonStyles({ backgroundColor: 'darkslategrey' })
        } else if (buttonType === 'Text') {
            setButtonStyles({ backgroundColor: 'darkslategrey' })
        } else if (buttonType === 'Outline') {
            console.log('Button is Outline')
            setButtonStyles({ backgroundColor: 'whitesmoke', color: 'darkslategrey', border: '1px solid darkslategray' })
        } else {
            alert('ButtonType error in UseEffect')
        }

    }, [buttonType]);

    useEffect(() => {
        if (!buttonShadow && buttonType === 'Outline') {
            setButtonStyles({ boxShadow: 'none', backgroundColor: 'whitesmoke', color: 'darkslategray', border: '1px solid darkslategray' })
        } else if (!buttonShadow) {
            setButtonStyles({ boxShadow: 'none' })
        } else if (buttonShadow && buttonType === 'Outline') {
            setButtonStyles({ boxShadow: '0 10px 17px -4px black', backgroundColor: 'whitesmoke', color: 'darkslategray', border: '1px solid darkslategray' })
        } else {
            setButtonStyles({ boxShadow: '0 10px 17px -4px black' })
        }
    }, [buttonShadow]);
    
  

    const handleChange = (e) => {
        setButtonType(e.target.value);
        (e.target.value === 'Text') ? setButtonValue('Text') : setButtonValue('Button')
    }
    const buttonPlacementLeft = () => {
        if (!iconPlacement) {
            return <span class="material-icons">{buttonIcon}</span>
        }
    }
    const buttonPlacementRight = () => {
        if (iconPlacement) {
            return <span class="material-icons">{buttonIcon}</span>
        }
    }
    const shadow = (buttonShadow)?'0 10px 17px -4px black':'none'
    return (
        <div className="bg">
            <div className="buttonContainer">
                {buttonPlacementLeft()}
                <button href='#' className="button" style={buttonStyles, { color: buttonStyles.color, border: buttonStyles.border, backgroundColor: buttonStyles.backgroundColor, height:buttonHeight+'px', width: buttonWidth+'px', boxShadow:shadow}} disabled={buttonDisabled}>{buttonValue}</button>
                {buttonPlacementRight()}
            </div>
            <div className="buttonSidebar">
                <section>
                    <p className="sectionHeader">Button Type</p>
                    <label for="Default"><input type="radio" id="Default" value="Default" onClick={handleChange} checked={buttonType === 'Default'} />Default</label>
                    <label for="Text"><input type="radio" id="Text" value="Text" onClick={handleChange} checked={buttonType === 'Text'} />Text</label>
                    <label for="Outline"><input type="radio" id="Outline" value="Outline" onClick={handleChange} checked={buttonType === 'Outline'} />Outline</label>
                </section>
                <section id="singleInputSection">
                    <p className="sectionHeader">Disable Button</p>
                    <ToggleButton value={buttonDisabled} onToggle={(value) => setButtonDisabled(!value)} />
                </section>
                <section id="singleInputSection">
                    <p className="sectionHeader">Disable Shadow</p>
                    <ToggleButton value={buttonShadow} onToggle={(value) => setButtonShadow(!value)} />
                </section>
                <section>
                    <p className="sectionHeader">Icon Placement</p>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}><span>Left</span>
                        <FormControlLabel style={{ margin: '0px' }}
                            control={<Switch checked={iconPlacement} value={iconPlacement} onClick={() => setIconPlacement(!iconPlacement)} />}

                        />
                        {/* <ToggleButton value={iconPlacement} onToggle={(value) => setIconPlacement(!value)} /> */}
                        <span>Right</span>
                    </div>
                </section>
                <section>
                    <p className="sectionHeader">Button Icon</p>
                    <label for="add_shopping_cart"><input type="radio" value="add_shopping_cart" onClick={(e) => setButtonIcon(e.target.value)} checked={buttonIcon === 'add_shopping_cart'} /><span class="material-icons">add_shopping_cart</span></label>
                    <label for="build"><input type="radio" value="build" onClick={(e) => setButtonIcon(e.target.value)} checked={buttonIcon === 'build'} /><span class="material-icons">build</span></label>
                    <label for="code"><input type="radio" value="code" onClick={(e) => setButtonIcon(e.target.value)} checked={buttonIcon === 'code'} /><span class="material-icons">code</span></label>
                    <label for="check"><input type="radio" value="check" onClick={(e) => setButtonIcon(e.target.value)} checked={buttonIcon === 'check'} /><span class="material-icons">check</span></label>
                    <label for="search"><input type="radio" value="search" onClick={(e) => setButtonIcon(e.target.value)} checked={buttonIcon === 'search'} /><span class="material-icons">search</span></label>
                </section>
                <section>
                    <p className='sectionHeader'>Button Sizing</p>
                    <div class="slidecontainer">
                    <span>Width:</span> <input type="range" min="125" max="220" value={buttonWidth} class="slider" id="width" onChange={(e)=> setButtonWidth(e.target.value) }/>
                    <span>Height:</span> <input type="range" min="50" max="100" value={buttonHeight} class="slider" id="height" onChange={(e)=> setButtonHeight(e.target.value) }/>
                    </div>
                </section>
                <section>
                    <p className='sectionHeader'>Button Color</p>
                    <div onClick={(e)=> setButtonStyles({ backgroundColor: e.target.style.background })}>
                    <GithubPicker />
                    </div>
                </section>
            </div>
            <div className='footer'>
            <div class="footer-copyright text-center p-3 grey lighten-1 text-black-50" style={{color: 'white'}}> 
    © 2021 :
    <a id="footer-link-react-copyright" class="black-text" style={{color: 'white', textDecoration:'none'}} href="http://chaselipscomb.github.io/">
       Chase Lipscomb DevChallenges.io
    </a>
  </div>
            </div>
            
            </div>
    )
}

export default Button
