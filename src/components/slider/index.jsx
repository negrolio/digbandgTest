import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: '100%',
  },
  slider: {
    padding: '22px 0px',
  },
  track: {
    backgroundColor: 'white',
    height: 5,
  },
  thumb: {
    backgroundColor: 'white',
    height: 20,
    width: 20,
  },
};

class SimpleSlider extends React.Component {
  state = {
    value: this.props.value,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.setValue(parseInt(value));
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          classes={{
            container: classes.slider,
            track: classes.track,
            thumb: classes.thumb,
          }}
          value={value}
          aria-labelledby="label"
          onChange={this.handleChange}
          min={this.props.min}
          max={this.props.max}
        />
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlider);
