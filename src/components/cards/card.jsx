import IconBox from "../iconBox/iconBox";

const Card = ({icon,title, description }) => {
  return (
    <div className="col-xl-4 col-lg-6 col-12 position-relative mb-5 rounded-2">
      <div className="card bg-body-secondary py-4 px-3 text-center border-0 h-100">
        <div className="card-body text-center">
          <IconBox
            iconClass={icon}
          />
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
