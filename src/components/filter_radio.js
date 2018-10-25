import React from "react";
import PropTypes from "prop-types";
import DownIcon from "../icons/DownIcon.png";
import { BoxTitle, ArrowIcon } from "../styles/components/check_list";
import { fonts, colors } from "../lib/theme";
import { ButtonGroup, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class RadioList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      rSelected: []
    };
    this.propTypes = {
      title: PropTypes.string.isRequired,
      filterList: PropTypes.arrayOf(PropTypes.obj).isRequired
    };
    this.onRadio = this.onRadio.bind(this);
  }

  handleTitleClick = () => {
    this.setState({ listOpen: !this.state.listOpen });
  };

  onRadio = rSelected => {
    this.setState({ rSelected });
  };

  render() {
    const { title, filterList } = this.props;
    const { listOpen } = this.state;
    return (
      <div style={{ marginLeft: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "25px"
          }}
        >
          <ButtonGroup vertical>
            {filterList.map(item => (
              <Button
                style={
                  this.state.rSelected === item.key
                    ? {
                        color: `${colors.darkBrown}`,
                        fontFamily: `${fonts.lato}, sans-serif`,
                        width: "250px",
                        marginLeft: "25px",
                        backgroundColor: `${colors.lightBrown}`
                      }
                    : {
                        color: `${colors.darkBrown}`,
                        fontFamily: `${fonts.lato}, sans-serif`,
                        width: "250px",
                        marginLeft: "25px",
                        backgroundColor: `${colors.lightBeige}`
                      }
                }
                onClick={() => this.onRadio(item.key)}
              >
                {item.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
