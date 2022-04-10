import {  makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { createStyles, withStyles } from '@material-ui/styles';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import FormControl from '@material-ui/core/FormControl';
import {InputLabel, Select, Input, MenuItem, Checkbox, ListItemText, Grid} from '@material-ui/core';
import { RepeatTwoTone } from '@material-ui/icons';

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
  },
  dropdownStyle: {
    display: 'grid',
    gridTemplateRows: 'repeat(4, min-content)',
    gridAutoColumns: 'repeat(2,minmax(min-content, max-content))',
    color: 'red',
  },
}));

const DropdownContainer = () => {
  const [hideFilters, setHideFilters] = useState(false);
  const [displaytext, setDisplayText] = useState('Hide Filter');
  const [arrowIcon, setArrowIcon] = useState( <ExpandLessIcon /> );
  const [filterName, setFilterName] = useState([]);

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
          <FormControl variant='outlined' key={x.id} className={classes.formControl} style={{ minWidth: '120px'}}>
            <InputLabel id={x.id} shrink={false}>{x.name}</InputLabel>
            <Select
              // labelId={id}
              multiple
              value={filterName}
              onChange={handleChange}
              input= {<Input />}
              renderValue={(selected) => selected.join(', ')}
              SelectDisplayProps={{ style: { paddingTop: 8, paddingBottom: 8, border: '1px solid #666',  marginRight: '10px', borderRadius: '1px' } }}
              variant="menu"
              disableUnderline
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                getContentAnchorEl: null,
                classes: { list:classes.dropdownStyle },
              }}
              >
                {x.items.map((item, idx) => (

                    <MenuItem
                      key={idx}
                      value={item}
                      noWrap
                      item

                    >
                      <Checkbox checked={filterName.indexOf(item) > -1} />
                      <ListItemText primary={item} />
                    </MenuItem>
                ))}
            </Select>
          </FormControl>
        ))}
        
      </div>
    </div>
  )
}
export default DropdownContainer;
