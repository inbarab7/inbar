import ReactDOM from 'react-dom/client';
import './index.css';
import "animate.css";
import { useState,  useRef, useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

var buttons = ['Introduction - B707 IAF tanker "Reem"', 'Air Refueling - Normal NATO Procedure', 'Emergency Procedure', 'Tips and Examples'];

var pageTitles = {
  'Introduction - B707 IAF tanker "Reem"': {
    'title1': 'Introduction',
    'title2': 'Air Refueling System',
    'title3': 'THE BOOM',
    'title4': 'Tanker Lights',
    'title5': 'Director Lights',
    'title6': 'Director Lights - Animation',
    'title7': 'F-15 Air Refueling',
  },
  'Air Refueling - Normal NATO Procedure' : {
    'title1': 'Rendevous With Tanker',
    'title2': 'Joining the Tanker',
    'title3': 'Echelon',
    'title4': 'Astern Position',
    'title5': 'Contact',
    'title6': 'Video',
  },
  'Emergency Procedure': {
    'title1': 'Breakaway',
    'title2': 'Loss of Visual Contact',
    'title3': 'Safety Tips',
  },
  'Tips and Examples': {
    'title1': 'Tips',
    'title2': 'Reciever is unstable and disobedient',
    'title3': 'Receiver approaching too fast and close',
    'title4': '"Overrun" - receiver approaches too quickly and fails',
    'title5': 'Incorrect Astern Position - Rear',
    'title6': 'Incorrect Astern Position - Low',
    'title7': 'Incorrect Astern Position - Front',
    'title8': 'Incorrect Astern Position - High',
    'title9': 'Procedures Words Summarize',
  },
}

var pageContent = {
  'Introduction': {
    'title': '"Reem" - Israeli Air Refuling Tanker',
    'text': [
      'Refueling fighter jets - **F15, F16, F35** | C130',
      '5 crew members - 2 Pilots, Flight Engineer, Navigator and Boom operator',
      `B707 tanker - with **Boom only (no probe and drogue)**`,
    ],
    'image': ['assets/images/Introduction.jpg'],
    // 'image': ['/assets/images/Introduction.jpg'],
  },
  'Air Refueling System': {
    'image': ['assets/images/AirRefuelingSystem1.png'],
    // 'image': ['/assets/images/AirRefuelingSystem1.png'],
  },
  'THE BOOM': {
    'text': [
      "The telescope is an inner tube inside the boom which enables the fuel pipe to move back and forth according to the receiver's position",
      "The range of movement of the boom is limited, so **the receiver must be in the center of the envelope and listen to the boomer's instructions**",
      'The fuel nozzle at the aft of the telescope is opened and closed automatically when the receiver and the tanker get signal',
    ],
    'image': ['assets/images/Boom1.jpg', 'assets/images/Boom2.jpg'],
    // 'image': ['/assets/images/Boom1.jpg', '/assets/images/Boom2.jpg'],
  },
  'Tanker Lights': {
    'image': ['assets/images/TankerLights.png'],
    // 'image': ['/assets/images/TankerLights.png'],
    'text': [
      '**Wing lights** - illuminates wing surface to serve as a reference to the receiver aircraft during night operation',
      '**Rudder light** - illuminates the tanker rudder to serve as a reference for the receiver aircraft during night operation',
      '**Fuel flow light** - One blue light, located between the two director light strips. The light illuminates when fuel is being transferred to the recieving aircraft',
      '**Beta lights** - phosphoric lights located along the boom, helps the receiver aircraft pilot to locate the boom during night operation',
    ],
  },
  'Director Lights': {
    'text': [
      'The director lights system directs the recieving aircraft to approach and stay in the air refueling envelope limits',
      'The lights comprise two strips of lights located on the belly of the fuselage. The director lights are located between the wings and the A/R boom outlet',
      'The left lights strip is used for **elevation signals**. The right light strip is used for **fwd and aft signals**',
    ],
    'image': ['assets/images/DirectorLights1.jpg', 'assets/images/DirectorLights2.png'],
    // 'image': ['/assets/images/DirectorLights1.jpg', '/assets/images/DirectorLights2.png'],
  },
  'Director Lights - Animation': {
    // 'animation': 'animation',
    'video': 'assets/videos/Director Lights - Animation.mp4',
  },
  'F-15 Air Refueling': {
    'image': ['assets/images/F15_1.png', 'assets/images/F15_2.png'],
    // 'image': ['/assets/images/F15_1.png', '/assets/images/F15_2.png'],
    'text': [
      'The F-15 receptacle is located 4 feet left from the center of the airplane',
      'F-15 fighter should align by the red stripe in the right hand wheel well of the tanker',
      'During night A/R the tanker will light the red stripe',
    ],
  },
  'Rendevous With Tanker': {
    'title': 'Preparations',
    'text': [
      'First plane of each formation - activate TACAN A/A',
      'QNH - from the control/tanker',
      'Airspeed - 300K CAS',
      'Before entering the CTR - contact join freq'
    ],
    'title2': 'Fighter report = "Judy / Radar contact"',
    'text2': [
      'radar contact with the tanker',
      'receiver taking over responsibility for closing to within visual range',
    ],
  },
  'Joining the Tanker': {
    'title': 'Joining Tanker',
    'text': [
      `1st formation - 1000' below tanker | left side`,
      `2nd formation - 2000' below tanker | 1 mile behind 1st formation`,
    ],
    'title2': '"Visual"',
    'text2': [
      'Fighter report "Visual" when have eye contact with the tanker',
      `**Climbing more than 1000' below tanker is forbidden without visual**`,
    ],
    'title3': 'After visual tanker will report "Join echelon left, contact boom frequency"',
  },
  'Echelon': {
    'title': 'Echelon Left',
    'text': [
      'The initial formation position for a receiver joining the tanker',
      'A position to the left and slightly behind the wing with a minimum of one receiver wingspan clearance',
    ],
    'title2': 'Echelon Right',
    'text2': [
      'The formation position for a receiver after leaving the tanker',
      'A position to the right and slightly above the tanker wing with a minimum of one receiver wingspan clearance',
    ],
  },
  'Astern Position': {
    'title': 'Boom operator will advise receiver "clear astern"',
    'title2': 'Joining Tanker',
    'text2': [
      '50 feet behind the boom | on its axis',
      'Slightly below the tanker boom nozzle with zero rate of closure',
      'The boom is between the director lights',
    ],
    'image': ['assets/images/SideView.png', 'assets/images/CorrectPosition.jpg'],
    // 'image': ['/assets/images/SideView.png', '/assets/images/CorrectPosition.jpg'],
  },
  'Contact': {
    'title': 'Boom operator will advise receiver "clear contact"',
    'title2': 'Boom operator will use director lights or oral direction to keep the receiver on a good position',
    'text2': [
      '"Up / Down"',
      '"Forward / Back"',
      '"Left / Right"',
    ],
    'title3': 'Boom operator may use a 1-5 scale to be more specific',
    'text3': [
      '"3 right" (fighter is too much to the left)',
      '"4 up" (fighter is too low)',
    ],
  },
  'Video': {
    'video': 'assets/videos/Video.mp4',
  },
  'Breakaway': {
    'title': 'An emergency in either the tanker or the receiver may require a quick seperation between the airplanes',
    'title2': 'A radio call and appropriate visual signals will be given',
    'title3': 'Reasons for breakaway',
    'text3': [
      'receiver under runs the tanker',
      'the tanker has a malfunction',
      'receiver is judged to be flying erratically',
    ],
    'video': ['assets/videos/BreakAway.mp4'],
    // 'video': ['/assets/videos/BreakAway.mp4'],
  },
  'Loss of Visual Contact': {
    'title': 'Any aircraft in closed formation that loses visual contact with the tanker or the receiver has to take immidiate action to achieve safe seperation',
    'text': [
      'In astern or Contact: slow down 10kts for 30 sec, descend 500ft below the tanker',
      "In Echeclon: (No 1) turn away from the tanker's heading using 15 deg for 15 sec (15:15), (No 2) turn away from the tanker's heading using 30 deg for 30 sec (30:30), Etc..."
    ],
    'image': ['assets/images/LossOfVisual.png'],
    // 'image': ['/assets/images/LossOfVisual.png'],
  },
  'Safety Tips': {
    'text': [
      'Make sure you got the "Disconnect" announcement from the boom operator before exiting to Astern',
      'If you feel anything wrong, or you are not stabilized during approach towards the boom, advise the boom operator and return to astern',
      'In any dilemma you have during A/R - simplicity is key',
    ],
  },
  'Tips': {
    'text': [
      "Astern position - some of the receivers have a tendency to reach too high so the boom operator is unable to see them. **Remember that when you are able to see the tanker, the boom operator doesn't always see you**",
      'The receiver movements before and during contact position must be done gently and with small adjustments. **Quick movements around the boom is dangerous to the receiver and to the tanker**',
      'After disconnecting - join echelon right via astern position',
      'The Israeli boom operators have a tendency to use a lot of oral directions. **Please listen to the boom operator instructions and cooperate**',
    ],
  },
  'Reciever is unstable and disobedient': {
    'video': 'assets/videos/UnstableReceiver.mp4',
    // 'video': '/assets/videos/UnstableReceiver.mp4',
  },
  'Receiver approaching too fast and close': {
    'video': 'assets/videos/QuickApproach.mp4',
    // 'video': '/assets/videos/QuickApproach.mp4',
  },
  '"Overrun" - receiver approaches too quickly and fails': {
    'video': 'assets/videos/overrun.mp4'
    // 'video': '/assets/videos/overrun.mp4'
  },
  'Incorrect Astern Position - Rear': {
    'text': [
      'The boom points lower than the beginning of the director lights',
      'The boom wings (ruddervator) points to the wide part of the tanker'
    ],
    'image': ['assets/images/RearPosition1.png', 'assets/images/RearPosition2.png'],
    // 'image': ['/assets/images/RearPosition1.png', '/assets/images/RearPosition2.png'],
  },
  'Incorrect Astern Position - Low': {
    'text': [
      'The boom points very high and it looks like it pointed directly to the receiver pilot',
      'The boom wings (ruddevators) points on the narrow part of the tanker aft',
    ],
    'image': ['assets/images/LowPosition1.png', 'assets/images/LowPosition2.png'],
    // 'image': ['/assets/images/LowPosition1.png', '/assets/images/LowPosition2.png'],
  },
  'Incorrect Astern Position - Front': {
    'text': [
      'the boom points behind the receiver pilot',
      'The boom wings (ruddervators) points almost to the tail of the tanker',
    ],
    'image': ['assets/images/FrontPosition1.png', 'assets/images/FrontPosition2.png'],
    // 'image': ['/assets/images/FrontPosition1.png', '/assets/images/FrontPosition2.png'],
  },
  'Incorrect Astern Position - High': {
    'text': [
      'the boom points to the center of the  receiver',
      `The boom wings (ruddervators) does'nt point to the beginning of the narrow part of the tanker's tail`,
    ],
    'image': ['assets/images/HighPosition1.png', 'assets/images/HighPosition2.png'],
    // 'image': ['/assets/images/HighPosition1.png', '/assets/images/HighPosition2.png'],
  },
  'Procedures Words Summarize': {
    'pdf': 'assets/NATO_Air_Refeling.pdf'
    // 'pdf': '/assets/NATO_Air_Refeling.pdf'
  },
}


function App() {

  
  const [selectedButton, setSelectedButton] = useState('Introduction - B707 IAF tanker "Reem"');
  const [isSubMenu, setIsSubMenu] = useState(null);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  
  const buttonRefs = useRef([]);
  
  // Function to handle clicking one of the main buttons
  const onButtonClick = (button) => {
    setSelectedButton(button);
    if (selectedButton !== button) {
      setIsSubMenu(null);
    }
  };
  
  const openMenuClick = (button) => {
    if (!isSubMenu) {
      setIsSubMenu(button);
    } else {
      setIsSubMenu(null);
    }
  }
  
  const openInfo = () => {
    setIsOpenInfo(true);
  }
  
  const closeInfo = () => {
    setIsOpenInfo(false);
  }
  
  return (
    <div className='container'>
      <Logos />
      <div className='mainContainer'>
        <Buttons
        buttons={buttons}
        selectedButton={selectedButton}
        onButtonClick={onButtonClick}
        buttonRefs={buttonRefs}
        isSubMenu={isSubMenu}
        openMenuClick={openMenuClick} />
        {selectedButton &&
          <Text
            text={selectedButton}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
            onButtonClick={onButtonClick}
            openMenuClick={openMenuClick}
            isSubMenu={isSubMenu}
            setIsSubMenu={setIsSubMenu}
            openInfo={openInfo}
          />
        }
        {isOpenInfo && <Info closeInfo={closeInfo} />}
      </div>
    </div>
  );
};

const Logos = () => {
  return (
    <div className='logos'>
      <div className='logoAir'></div>
      <div className='logo120'></div>
    </div>
  );
};

// Menu buttons
const Buttons = ({buttons, selectedButton, onButtonClick, buttonRefs, isSubMenu, openMenuClick}) => {
  const [isGlow, setIsGlow] = useState(false);

  return (
    <div className='buttonWrap'>
      {buttons.map((button) => {
        const isSelected = selectedButton === button;
        return (
          <div className='buttons' key={button}>
            <div
            className={`button ${isSelected ? 'selected' : ''}`}
            ref={(el) => (buttonRefs.current[button] = el)}
            onClick={() => onButtonClick(button)}>
              {button}
              {isSelected ?
                <div
                  className={`openMenuBig ${isGlow ? 'glow' : ''}`}
                  onMouseEnter={() => setIsGlow(true)}
                  onMouseLeave={() => setIsGlow(false)}
                  onClick={() => openMenuClick(`${isSubMenu ? null : button}`)}>
                </div>
              : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};


// Menu buttons when user is on full screen mode 
const MiniButtons = ({buttons, selectedButton, onButtonClick, buttonRefs, openMenuClick, isSubMenu, setIsSubMenu}) => {
  const [isMiniButtons, setIsMiniButtons] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isGlow, setIsGlow] = useState(false);

  const handleToggle = () => {
    if (isMiniButtons) {
      setIsClosing(true);
      setIsMiniButtons(false);
      setTimeout(() => {
        setIsClosing(false);
      }, 1000);
    } else {
      setIsMiniButtons(true);
    }
    setIsSubMenu(null);
  };

  return (
    <div className={`menuContainer ${isMiniButtons ? 'show' : ''}`}>
      <div
        className={`menu ${isMiniButtons ? 'antiMenu' : ''}`}
        onClick={handleToggle}>
          <span className='tooltipText'>
            Click to {isMiniButtons ? 'close' : 'open'} menu
          </span>
      </div>
        <div className={`minibuttonWrap ${isClosing ? 'isClosing' : ''}`}>
          {buttons.map((button) => {
            const isSelected = selectedButton === button;
            return (
              <div className='minibuttons' key={button}>
                <div
                  className={`minibutton ${isSelected ? 'miniselected' : ''}`}
                  ref={(el) => (buttonRefs.current[button] = el)}
                  onClick={() => onButtonClick(button)}>
                  {button}
                  {isSelected ?
                    <div
                      className={`openMenu ${isGlow ? 'glow' : ''}`}
                      onMouseEnter={() => setIsGlow(true)}
                      onMouseLeave={() => setIsGlow(false)}
                      onClick={() => openMenuClick(`${isSubMenu ? null : button}`)}>
                    </div>
                  : null}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};


const SubMenu = ({button, subMenuClick}) => {
  return (
    <div className='submenucontainer'>
      {pageTitles[button] &&
        Object.values(pageTitles[button]).map((title) => (
          <div key={title} className='submenu' onClick={() => subMenuClick(title)}>{title}</div>
        ))}
    </div>
  );
};

// Whole page, depending on which button i picked
const Text = ({text, selectedButton, setSelectedButton, onButtonClick, openMenuClick, isSubMenu, setIsSubMenu, openInfo}) => {
  // useStates
  const [displayedText, setDisplayedText] = useState("");
  const [page, setPage] = useState({});
  const [currentChapter, setCurrentChapter] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const [shouldShowMenu, setShouldShowMenu] = useState(isFullScreen);


  const hasScrolledRef = useRef(false);

  
  const scrollRef = useRef(null);
  const buttonRefs = useRef([]);
  const totalPages = Object.keys(pageTitles[text]).length;

  useEffect(() => {
    if (isFullScreen) {
      const timeout = setTimeout(() => {
        setShouldShowMenu(true);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setShouldShowMenu(false);
    }
  }, [isFullScreen]);
  

  // Scroll to top when the page changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [page, currentChapter]);

  // Animates the titles for each page
  useEffect(() => {
    if (!text) return;

    setDisplayedText("");
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index < text.length) {
          return prev + text[index++];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 80);
    return () => clearInterval(interval);
  }, [text]);

  // Each time the user goes to a different chapter (by clicking on a main button) it makes sure they're on the right page
  useEffect(() => {
    if (text) {
      setCurrentChapter(text);
      setPage((prev) => ({
        ...prev,
        [text]: 0,
      }));
    }
  }, [text]);

  // Changes the page number when the user clicks on either "Next" or "Previous" 
  const setNewPage = (newPage) => {
    setPage((prev) => ({
      ...prev,
      [currentChapter]: newPage,
    }));
  };

  const subMenuClick = (title) => {
    setIsSubMenu(null);
    const titles = Object.values(pageTitles[text]);
    const pageIndex = titles.indexOf(title);
    if (pageIndex !== -1) {
      setCurrentChapter(text);
      setPage((prev) => ({
        ...prev,
        [text]: pageIndex + 1,
      }));
    }
  }

  const fullscreenClick = () => {
    setIsFullScreen(!isFullScreen);
    setIsSubMenu(null);
  }

  const currentPage = page[currentChapter] ?? 0;
  const isLastPage = currentPage === Object.keys(pageTitles[text]).length;


  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
  
    el.scrollTop = 0;
  
    const shouldShowIndicator = el.scrollHeight > el.clientHeight;
  
    hasScrolledRef.current = false;
    setHasScrolled(false);
    setShowScrollIndicator(shouldShowIndicator);
  
  }, [currentPage]);
  

  useEffect(() => {
    const el = scrollRef.current;
  
    setTimeout(() => {
      const checkScrollability = () => {
        if (el && el.scrollHeight > el.clientHeight) {
          setShowScrollIndicator(true);
          setHasScrolled(false);
        } else {
          setShowScrollIndicator(false);
        }
      };
    
  
      const handleScroll = () => {
        if (!hasScrolledRef.current && el.scrollTop > 10) {
          hasScrolledRef.current = true;
          setHasScrolled(true);
          setShowScrollIndicator(false);
        }
      };
      
    
      checkScrollability();
      el?.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', checkScrollability);
    
      return () => {
        el?.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkScrollability);
      };
    }, 1000);
  }, [currentPage]);


  return (
    <div ref={scrollRef} className={`white ${isFullScreen ? 'fullscreen' : ''} ${currentPage !== 0 ? 'scroll' : 'titlePage'}`}>
      {showScrollIndicator && !hasScrolled && (
        <div className='scrollIndicator'></div>
      )}
      <TopNavBar isFullScreen={isFullScreen} fullscreenClick={fullscreenClick} currentPage={currentPage} totalPages={totalPages} openInfo={openInfo} />

      {shouldShowMenu && (
        <MiniButtons
          buttons={buttons}
          selectedButton={text}
          onButtonClick={onButtonClick}
          buttonRefs={buttonRefs}
          openMenuClick={openMenuClick}
          isSubMenu={isSubMenu}
          setIsSubMenu={setIsSubMenu}
        />
      )}

      {isSubMenu ? <SubMenu button={isSubMenu} subMenuClick={subMenuClick}  /> : null}
      
      {currentPage === 0 ? (
        <Title displayedText={displayedText} />
        ) : (
          <>
            <Page page={currentPage} text={text} isFullScreen={isFullScreen} />
          </>
      )}
      <Arrows
        currentPage={currentPage}
        setNewPage={setNewPage}
        isLastPage={isLastPage}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        setIsSubMenu={setIsSubMenu}
      />
    </div>
  );
};

const TopNavBar = ({isFullScreen, fullscreenClick, currentPage, totalPages, openInfo}) => {
  return (
    <div className='navbar'>
      <button className={`fullscreenToggle ${isFullScreen ? 'mini' : 'full'}`}  onClick={fullscreenClick}>
        <span className='tooltipText'>
          {isFullScreen ? 'Minimize screen' : 'Maximize screen'}
        </span>
      </button>
      <div className='pageNum'>{currentPage} / {totalPages}</div>
      <div className='i' onClick={openInfo}>ⓘ
        <span className='tooltipText'>
            Click for more info!
        </span>
      </div>
    </div>
  )
}

const Info = ({closeInfo}) => {
  return (
    <div className='info'>
      <div className='infoText'>
        <div className='x' onClick={closeInfo}>x</div>
        <div className='aboutInfoText'>Content Specialist: Cpt. I.B</div>
        <div className='aboutInfoText'>Animation and Design: Pvt. L. Katz</div>
        <div className='aboutInfoText'>Programming: Cpl. I. Alon Bitton</div>
      </div>
    </div>
  )  
}

// Next & Previous buttons
const Arrows = ({currentPage, setNewPage, isLastPage, selectedButton, setSelectedButton, setIsSubMenu}) => {
  // When clicking on the middle arrow button while being on the last page, user moves to next chapter
  const onClickBack = () => {
    setNewPage(0);
    for (let i = 0; i < buttons.length; i++) {
      if (selectedButton === buttons[i]) {
        setSelectedButton(buttons[i + 1]);
      };
    };
    setIsSubMenu(null);
  };

  const onClickFinish = () => {
    setNewPage(0);
    setSelectedButton(buttons[0]);
  }

  return (
    <div className='arrows'>
        <div
          className={`prev ${currentPage === 0 ? 'disabled' : ''}`}
          onClick={() => {
            setNewPage(Math.max(0, currentPage - 1));
            setIsSubMenu(null);
          }}
          >
          Previous
        </div>
        {
          isLastPage ?
            selectedButton === buttons[buttons.length - 1] ?
              <div className='back' onClick={onClickFinish}>Finish & Go back to start</div>
            :
              <div className='back' onClick={onClickBack}>Go to the next chapter</div>
          :
            <div
              className='next'
              onClick={() => {
                if (!isLastPage) setNewPage(currentPage + 1);
                setIsSubMenu(null);
              }}
            >
              Next
            </div>
        }
      </div>
  );
};

// Title for each chapter
const Title = ({displayedText}) => {
  return (
    <div className='titleContainer'>
      <div className='title'>{displayedText}</div>
    </div>
  )
};

// Title for each page
const Page = ({page, text, isFullScreen}) => {
  const pageTitle = pageTitles[text][`title${page}`];

  return (
    <div className='actualContainer' key={page}>
      <div className='pageTitleContainer'>
        <div className='pageTitle animate__animated animate__zoomIn'>
          {pageTitle}
        </div>
      </div>
      {pageTitle === 'Echelon' ? (
        <div className='EchelonContainer'>
          {/* <img src='/assets/images/Echelon.png' className='Echelon' alt='Echelon' /> */}
          <img src='assets/images/Echelon.png' className='Echelon' alt='Echelon' />
          <div className='nonImageEchelon'>
            <div className='localTitleEchelon'>{pageContent[pageTitle].title}</div>
            <div className='localTextEchelon'>
              {pageContent[pageTitle].text?.map((text, index) => (
                <div className='textEchelon' key={index}>{text}</div>
              ))}
            </div>
            <div className='localTitleEchelon'>{pageContent[pageTitle].title2}</div>
            <div className='localTextEchelon'>
              {pageContent[pageTitle].text2?.map((text2, index) => (
                <div className='textEchelon' key={index}>{text2}</div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Content pageTitle={pageTitle} isFullScreen={isFullScreen} />
      )}
    </div>
  );
};

const parseBoldText = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g); // Splits by **word**
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};


// Contents for pages
const Content = ({pageTitle, isFullScreen}) => {
  const content = pageContent[pageTitle];
  console.log(pageTitle);
  if (!content) return null;

  return (
    <div className='contentContainer'>
      {content.title && <div className='localTitle'>{content.title}</div>}
      
      <div className={`${content.image && 'newContainer'} ${isFullScreen && 'fullscreenthingy'}`}>
        {content.image && (
          <div className={`imageContainer ${isFullScreen && pageTitle === 'Astern Position' ? 'imageContainerDifferent' : ''}`}>
            {content.image && content.image.map((url, index) => {
              const fileName = url.split('/').pop().split('.')[0];
              return <img key={index} src={url} alt={`${index + 1}`} className={`pageImage ${fileName} ${Object.keys(content.image).length > 1 ? 'width' : ''}`} />;
            })}
          </div>
        )}
        {content.text && (
          <div className='localText localText1'>
            {content.text?.map((text, index) => (
              <div className={`text ${isFullScreen && content.image && 'texttt'}`} key={index}>{parseBoldText(text)}</div>
            ))}
          </div>
        )}
      </div>

      {content.title2 && <div className='localTitle'>{content.title2}</div>}
      
      <div className='localText'>
        {content.text2?.map((text2, index) => (
          <div className='text' key={index}>{parseBoldText(text2)}</div>
        ))}
      </div>

      {content.title3 && <div className='localTitle'>{content.title3}</div>}
      
      <div className='localText'>
        {content.text3?.map((text3, index) => (
          <div className='text' key={index}>{parseBoldText(text3)}</div>
        ))}
      </div>

      {content.video && (
        <div className='videoSection'>
          {[...Array(3)].map((_, index) => {
            const videoKey = `video${index === 0 ? '' : index + 1}`;

            return content[videoKey] ? (
              <div key={index} className={`videoItem ${pageTitle === 'Breakaway' ? 'lessVideoItem' : ''}`}>
                <video controls className='pageVideo'>
                  <source src={content[videoKey]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null;
          })}
        </div>
      )}

      {content.animation && (
        <div className='animationContainer'>
          {content.animation}
        </div>
      )}

      {content.pdf && (
        <div className='pdfContainer'>
          <iframe title='myFrmae' src={content.pdf}></iframe>
        </div>
      )}
    
    </div>
  );
};

const About = () => {
  return (
    <div className='about'>
      <div className='aboutText'>Content Specialist: Cpt. I.B</div>
      <div className='aboutText'>Animation and Design: Pvt. L. Katz</div>
      <div className='aboutText'>Programming: Cpl. I. Alon Bitton</div>
    </div>
  )
}

function Opening() {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const vendor = navigator.vendor;
  
    const isChrome = /Chrome/.test(userAgent) &&
                     /Google Inc/.test(vendor) &&
                     !/Edg/.test(userAgent) &&
                     !/OPR/.test(userAgent); // exclude Edge & Opera
  
  
    if (!isChrome) {
      alert("For best performance, please open this site in Google Chrome.");
    }
  }, []);
  

  const [isMainApp, setIsMainApp] = useState(false);
  const [openingText, setOpeningText] = useState("");
  const [smallerOpeningText, setSmallerOpeningText] = useState("");

  let text = 'Air Refueling Tutorial';
  let smallerText = 'From Israeli air refueling tanker (B707)';

  const onClickStart = () => {
    setIsMainApp(true);
  }

  useEffect(() => {
    if (!text) return;

    setOpeningText("");
    let index = 0;

    const interval = setInterval(() => {
      setOpeningText((prev) => {
        if (index < text.length) {
          return prev + text[index++];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, [text]);
  
  useEffect(() => {
    if (!smallerText) return;

    setSmallerOpeningText("");
    let index = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setSmallerOpeningText((prev) => {
          if (index < smallerText.length) {
            return prev + smallerText[index++];
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 100);
      return () => clearInterval(interval);
    }, 2400);
    return () => clearTimeout(timeout);
  }, [smallerText]);

  return (
    <div className='all'>
      {!isMainApp ? (
        <div className='opening'>
          <div className='ogTitleContainer'>
            <div className='ogTitle'>{openingText}</div>
            <div className='ogSmallerTitle'>{smallerOpeningText}</div>
          </div>
          <About />
          <div className='startButton' onClick={onClickStart}>start</div>
        </div>
        ) : (
          <App />
        )
      }
    </div>
  )
};

root.render(<Opening />);