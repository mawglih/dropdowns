import {  makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { createStyles, withStyles } from '@material-ui/styles';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import FormControl from '@material-ui/core/FormControl';
import {InputLabel, Select, InputBase, MenuItem, Checkbox, ListItemText, Grid} from '@material-ui/core';
import { RepeatTwoTone } from '@material-ui/icons';
import CustomCheckbox from './CustomCheckbox';

const ForSelect = [ 
  {id: 1, name: 'Price Range', items: ['10-20', '20-50', '50-100', '100-500', '500 - 5000'],},
  {id: 2, name: 'Occasions', items: ['Birthday (24)', 'Sympathy (16)', 'Thank you (10)', 'Get Well (12)', 'Thinking of you (2)', 'Mother\'s Day (10)', 'Christmas ()', 'Winter(4)', 'Summenr (2)', 'Friendship', 'Father\'s Day (2)', 'Anniversary (48)', 'Congratulations (56)'],},
  {id: 3, name: 'Recepient',items: ['Self', 'Woman', 'Dinosaurs', 'Alien'],},
  {id: 4, name: 'Ccntents', items: ['Mild', 'Dangeroous', 'Sexy', 'Explosive', 'Not for children', 'Not for adults'],},
  {id: 5, name: 'Gift Container', items: ['Plastic', 'Paper', 'Titanium', 'Golden', 'Poisonous', 'Uranium', 'Trapezoid'],},
  {id: 6, name: 'Wine Variety', items: ['One sort', 'two sorts', 'surprise me'],},
  {id: 7, name: 'Diet Restrictions', items: ['No glutes', 'No carbs', 'No meats', 'No food'],},
  {id: 8, name: 'Oleg choice',items: ['Red', 'Blue', 'Violet', 'Bold'],},
]

const HideButton = withStyles({
  root: {
    backgroundColor: 'lightgreen',
    color: '#666',
    gridColumnStart: 1,
  }
})(Button);

const SortButton = withStyles({
  root: {
    backgroundColor: 'lightgreen',
    color: '#666',
    gridColumnStart: 8,
  }
})(Button);



const GreenCheckbox = withStyles({
  root: {
    gridColumnStart: 1,
    '&:hover': {

    },
    "&$checked": {
      color: "#13c552"
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const CheckboxWithBlackTick = withStyles({
  root: {
    gridColumnStart: 2,
    "&$checked": {
      color: "#13c552",
      "& .MuiIconButton-label": {
        position: "relative",
        zIndex: 0
      },
      "& .MuiIconButton-label:after": {
        content: '""',
        left: 4,
        top: 4,
        height: 15,
        width: 15,
        position: "absolute",
        backgroundColor: "black",
        zIndex: -1
      }
    }
  },
  checked: {},
  })(Checkbox);

const useStyles = makeStyles((theme) => createStyles({
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'lightgreen',
    
  },
  sortBy: {
    gridColumnStart: 7,
  },
  buttonsFirst: {
    color: 'red',
    gridRowStart: 1,
  },
  buttonsSecond: {
    color: 'green',
  },
  buttonsThird: {
    color: 'purple',
  },
  formControl: {
    minWidth: '120px',
    '& .MuiList-root': {
      color: 'red',
    },
  },
  listClass : {
    display: 'grid',
    gridTemplateRows: 'repeat(4, min-content)',
    gridTemplateColumns: 'minmax(180px, min-content)',
    gridAutoFlow: 'column',
    gridRowGap: '10px',
    gridColumnGap: '40px',
  },
  menuItem: {
    border: '1px #222 solid',
  },
  paper: {
    color: 'red',
  },
  label: {
    color: 'green',
    backgroundColor: 'blue',
  },
  select: {
    // '& .MuiSvgIcon-root': {
    //   color: 'red',
    // }
  },
  icon: {
    color: 'green',
  },
  checkedClass: {
    "&:checked": {
      "& .MuiIconButton-label": {
        position: "relative",
        zIndex: 0
      },
      "& .MuiIconButton-label:after": {
        content: '""',
        left: 4,
        top: 4,
        height: 14,
        width: 14,
        position: "absolute",
        backgroundColor: "lightgreen",
        zIndex: -1
      },
    },
  },
  checkRoot: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  checkIcon: {
    width: 14,
    height: 14,
    backgroundColor: "white",
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none"
    }
  },
  checkCheckedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage: "blue",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundColor: "gray"
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  },
}));




const DropdownContainer = () => {
  const [hideFilters, setHideFilters] = useState(false);
  const [displaytext, setDisplayText] = useState('Hide Filter');
  const [arrowIcon, setArrowIcon] = useState( <ExpandLessIcon /> );
  const [filterName, setFilterName] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);

  const handleChange = () => {

  }
  const onClickHandle = e => {
    e.preventDefault();
    setHideFilters(!hideFilters);
    if(hideFilters) {
      setDisplayText('Hide Filters');
      setArrowIcon( <ExpandMore />);
    } else {
      setDisplayText("Filter");
      setArrowIcon( <ExpandLessIcon />);
    } 
  }
  const classes = useStyles;
  console.log('checked d', isChecked);
  return (
    <div className='container'>
      <div className='buttons'>
        <HideButton
          variant='outlined'
          className={classes.button}
          endIcon={arrowIcon}
          onClick={e => onClickHandle(e)}
        >
          {displaytext}
        </HideButton>
        <SortButton
          variant='outlined'
          endIcon={<ImportExportIcon />}
          className={classes.sortBy}
        >
          Sort By
        </SortButton>
      </div>
      <div className='buttons'>
        {ForSelect.map(x => (
          <FormControl
            variant='outlined'
            key={x.id}
          >
            <InputLabel 
              id={x.id}
              variant='standard'
              shrink={false}
              style = {{
                color: 'cadetblue',
                paddingLeft: '5px',
              }}
            >
              {x.name}
            </InputLabel>
            <Select
              multiple
              value={filterName}
              onChange={handleChange}
              input= {<InputBase />}
              renderValue={(selected) => selected.join(', ')}
              SelectDisplayProps={{ 
                style: {
                  paddingTop: 8,
                  paddingBottom: 8,
                  border: '1px solid #666', 
                  marginRight: '10px',
                  borderRadius: '1px' } 
                }}
              disableUnderline
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                getContentAnchorEl: null,
                classes: {
                  root: classes.select,
                  iconOutlined: classes.icon,
                },
                MenuListProps: {
                  style: {
                    display: 'grid',
                    gridTemplateRows: 'repeat(4, min-content)',
                    gridTemplateColumns: 'minmax(180px, min-content)',
                    gridAutoFlow: 'column',
                    gridRowGap: '10px',
                    gridColumnGap: '40px',
                  },
                }, 
              }}
              >
                {x.items.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    value={item}
                    noWrap
                    item
                  >
                    <Checkbox
                      checked={isChecked} 
                      className={{
                        root: classes.checkedClass,
                      }} 
                      onChange={() => setIsChecked(!isChecked)}
                    />
                    <ListItemText primary={item} />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        ))}
        
      </div>
      <div className="buttons">
        <GreenCheckbox checked={isChecked1} onChange={() => setIsChecked1((e) => e.target.checked)} disableRipple/>
        <CheckboxWithBlackTick checked={isChecked2} onChange={() => setIsChecked2((e) => e.target.checked)} />
        <CustomCheckbox checked={isChecked} onChange={() => setIsChecked((e) => e.target.checked)} />
        <Checkbox
          classes = {{
            root: classes.checkRoot,
            icon: classes.checkIcon,
            checkedIcon: classes.checkCheckedIcon,
          }}
        />
      </div>
    </div>
  )
}
export default DropdownContainer;
