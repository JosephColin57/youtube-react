import clsx from "clsx";
//Con todo el objeto

/* export default function Video(props) {
    return (
       <article className="video-card">
        <img src={props.image} alt="" />
        <footer>
            <img src="" alt="" />
            <p>{props.title}</p>
            <p>{props.channel}</p>
        </footer>
       </article>
    );
} */

// Deconstruccion con variable
/* 
export default function Video(props) {

    const { image, title, channel } = props;
    return (
       <article className="video-card">
        <img src={image} alt="" />
        <footer>
            <img src="" alt="" />
            <p>{title}</p>
            <p>{channel}</p>
        </footer>
       </article>
    );
} */

// deconstruccion sin variable

export default function Video({image, title, channel}) {
    return (
      <article
        className={clsx("flex flex-col gap-2", {
          special: channel === "Marques Brownlee",
        })}
      >
        <img
          className="w-full rounded-[10px] object-cover"
          src={image}
          alt=""
        />
        <footer className="grid gap-2 grid-cols-[2rem,1fr]">
          {/*  Forma larga de condicionales */}

          {channel && (
            <img className="col-start-1 col-end-2 w-8 h-8 rounded-full"
              src={`https://api.dicebear.com/8.x/identicon/svg?seed=${channel}`}
              alt=""
            />
          )}
          {!channel && <span>😵</span>}

          {/* Ternarios */}

          {/* {channel ? (
            <img
              src={`https://api.dicebear.com/8.x/identicon/svg?seed=${channel}`}
              alt=""
            />
          ) : (
            <span>😵</span>
          )} */}

          <p className="col-start-2 col-end-3">{title}</p>
          <p className="col-start-2 col-end-3">{channel || "unknown"}</p>
        </footer>
      </article>
    );
}