import "./ButtonCard.css";

function ButtonCard() {
  return (
    <div className="buttons">
      <div>
        <button>
          <a href="https://amankumarsubudhi.github.io">My Portfolio</a>
        </button>
      </div>

      <div>
        <button>
          <a href="https://github.com/amankumarsubudhi" target="_blank">
          Github
          </a>
        </button>
      </div>
      <div>
        <button>
          <a href="https://www.linkedin.com/in/amankumarsubudhi" target="_blank">
            Connect Me On LinkedIn
          </a>
        </button>
      </div>
      <div>
        <button>
          <a href="https://drive.google.com/file/d/1gYb86QJuRZ3acC_KLkUzeDCrvtjAQqAj/view?usp=sharing" target="_blank">
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default ButtonCard;
