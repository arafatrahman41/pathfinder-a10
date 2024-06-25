import PropTypes from 'prop-types';

const PopularSpot = ({spot}) => {
    console.log(spot);
    const {image} = spot
    return (
        <div className=''>
            <img className='w-' src={image} alt="" />
        </div>
    );
};

PopularSpot.propTypes = {
   spot: PropTypes.object 
};

export default PopularSpot;