import "./ButtonCard.css";


function ButtonCard() {
  return (
    <div className="buttons">
      <div>
        <button>
          <a href="https://amankumarsubudhi.github.io">Portfolio</a>
        </button>
      </div>

      <div>
        <button>
          <a href="https://github.com/amankumarsubudhi" target="_blank">
            Follow Me On Github
          </a>
        </button>
      </div>
    </div>
  );
}

export default ButtonCard;
