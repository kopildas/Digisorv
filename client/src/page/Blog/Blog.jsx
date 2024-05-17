import React from "react";
import Transition from "../../components/Page_transition/Transition";

function Blog() {
  return (
    <Transition>
      <div className="w-full h-screen flex-col place-content-center">
        <div>
          <p className="text-2xl">this is blog page</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit
            tempora, nesciunt odio saepe amet repellat neque quasi facere quod
            quos, ipsum consectetur aut corrupti minus esse labore libero harum.
          </p>
        </div>
        <div>
          <p className="text-2xl">this is blog page</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit
            tempora, nesciunt odio saepe amet repellat neque quasi facere quod
            quos, ipsum consectetur aut corrupti minus esse labore libero harum.
          </p>
        </div>
        <div>
          <p className="text-2xl">this is blog page</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit
            tempora, nesciunt odio saepe amet repellat neque quasi facere quod
            quos, ipsum consectetur aut corrupti minus esse labore libero harum.
          </p>
        </div>
      </div>
    </Transition>
  );
}

export default Blog;
