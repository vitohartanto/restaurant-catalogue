import Image from './styled/Image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Container from './styled/Container';
import Card from './styled/Card';

function RestaurantItem({ id, pictureId, name, description }) {
  return (
    <Card>
      <Image
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={name}
        width={300}
        height={200}
      />

      <Container>
        <h2>
          <Link href={`/detail/${id}`}>{name}</Link>
        </h2>
        <p>{description}</p>
        <br />
      </Container>
    </Card>
  );
}

RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RestaurantItem;
