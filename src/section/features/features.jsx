import Card from "../../components/cards/card";

function Features() {
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <Card
            icon="fa-solid fa-layer-group"
            title="Fresh new layout"
            description="With Bootstrap 5, we've created a fresh new layout for this template!"
          />
          <Card
            icon="fa-solid fa-cloud-arrow-up"
            title="Free to download"
            description="As always, Start Bootstrap has a powerful collectin of free templates."
          />
          <Card
            icon="fa-solid fa-rectangle-list"
            title="Jumbotron hero header"
            description="The heroic part of this template is the jumbotron hero header!"
          />
          <Card
            icon="fa-solid fa-b fa-xl"
            title="Jumbotron hero header"
            description="The heroic part of this template is the jumbotron hero header!"
          />
          <Card
            icon="fa-solid fa-right-left"
            title="Jumbotron hero header"
            description="The heroic part of this template is the jumbotron hero header!"
          />
          <Card
            icon="fa-solid fa-circle-check"
            title="Jumbotron hero header"
            description="The heroic part of this template is the jumbotron hero header!"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
