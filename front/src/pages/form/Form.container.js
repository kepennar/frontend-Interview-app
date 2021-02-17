import { connect } from "react-redux";
import { createBeer } from "../../redux/state/beers";
import { compose, withHandlers } from "recompose";
import ListForm from "./Form.component";

const mapStateToProps = state => {
  return {
    loading: state.beers.loading
  };
};

const mapDispatchToProps = { createBeer };

const connectList = connect(
  mapStateToProps,
  mapDispatchToProps
);


const handlers = withHandlers({
  inputChecker: props => values => {
    let errors = {};
    if (values){
      if (!values.name) {
        errors.name = "Required";
      }
      let float_ibu = parseFloat(values.ibu);
      if (!Number.isInteger(float_ibu) || float_ibu < 0){
        errors.ibu = "IBU should be a positive integer";
      }
    }
    return errors;
  },
  submitHandler: props => values => {
    props.createBeer(values);
  }
})

export default compose(
  connectList,
  handlers
)(ListForm);
