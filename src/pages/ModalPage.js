import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage () {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button primary rounded onClick={handleClose}> I Accept </Button>
    </div>

    // the below paragraph are the children 
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept..
        </p>
    </Modal>

    return (
        <div className="relative">
             <Button onClick={handleClick} primary rounded>Open Modal</Button>
            {showModal && modal }
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium fringilla augue eu commodo. Mauris sed vulputate odio. Nulla ultrices ac felis nec fermentum. Aenean malesuada augue dignissim, aliquet massa et, accumsan nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In lacinia turpis in est gravida malesuada. Quisque lacinia eget nisi imperdiet dapibus. Nunc eu dapibus est. Aliquam non enim nec metus accumsan porta non sed nisi. Pellentesque dictum in urna nec eleifend. Morbi commodo pellentesque iaculis. Donec consequat bibendum ullamcorper. Sed a orci vel nibh tincidunt cursus. Integer id accumsan libero. Morbi ut consequat justo. Aenean blandit molestie erat nec posuere.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium fringilla augue eu commodo. Mauris sed vulputate odio. Nulla ultrices ac felis nec fermentum. Aenean malesuada augue dignissim, aliquet massa et, accumsan nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In lacinia turpis in est gravida malesuada. Quisque lacinia eget nisi imperdiet dapibus. Nunc eu dapibus est. Aliquam non enim nec metus accumsan porta non sed nisi. Pellentesque dictum in urna nec eleifend. Morbi commodo pellentesque iaculis. Donec consequat bibendum ullamcorper. Sed a orci vel nibh tincidunt cursus. Integer id accumsan libero. Morbi ut consequat justo. Aenean blandit molestie erat nec posuere.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium fringilla augue eu commodo. Mauris sed vulputate odio. Nulla ultrices ac felis nec fermentum. Aenean malesuada augue dignissim, aliquet massa et, accumsan nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In lacinia turpis in est gravida malesuada. Quisque lacinia eget nisi imperdiet dapibus. Nunc eu dapibus est. Aliquam non enim nec metus accumsan porta non sed nisi. Pellentesque dictum in urna nec eleifend. Morbi commodo pellentesque iaculis. Donec consequat bibendum ullamcorper. Sed a orci vel nibh tincidunt cursus. Integer id accumsan libero. Morbi ut consequat justo. Aenean blandit molestie erat nec posuere.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium fringilla augue eu commodo. Mauris sed vulputate odio. Nulla ultrices ac felis nec fermentum. Aenean malesuada augue dignissim, aliquet massa et, accumsan nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In lacinia turpis in est gravida malesuada. Quisque lacinia eget nisi imperdiet dapibus. Nunc eu dapibus est. Aliquam non enim nec metus accumsan porta non sed nisi. Pellentesque dictum in urna nec eleifend. Morbi commodo pellentesque iaculis. Donec consequat bibendum ullamcorper. Sed a orci vel nibh tincidunt cursus. Integer id accumsan libero. Morbi ut consequat justo. Aenean blandit molestie erat nec posuere.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium fringilla augue eu commodo. Mauris sed vulputate odio. Nulla ultrices ac felis nec fermentum. Aenean malesuada augue dignissim, aliquet massa et, accumsan nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In lacinia turpis in est gravida malesuada. Quisque lacinia eget nisi imperdiet dapibus. Nunc eu dapibus est. Aliquam non enim nec metus accumsan porta non sed nisi. Pellentesque dictum in urna nec eleifend. Morbi commodo pellentesque iaculis. Donec consequat bibendum ullamcorper. Sed a orci vel nibh tincidunt cursus. Integer id accumsan libero. Morbi ut consequat justo. Aenean blandit molestie erat nec posuere.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium fringilla augue eu commodo. Mauris sed vulputate odio. Nulla ultrices ac felis nec fermentum. Aenean malesuada augue dignissim, aliquet massa et, accumsan nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In lacinia turpis in est gravida malesuada. Quisque lacinia eget nisi imperdiet dapibus. Nunc eu dapibus est. Aliquam non enim nec metus accumsan porta non sed nisi. Pellentesque dictum in urna nec eleifend. Morbi commodo pellentesque iaculis. Donec consequat bibendum ullamcorper. Sed a orci vel nibh tincidunt cursus. Integer id accumsan libero. Morbi ut consequat justo. Aenean blandit molestie erat nec posuere.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium fringilla augue eu commodo. Mauris sed vulputate odio. Nulla ultrices ac felis nec fermentum. Aenean malesuada augue dignissim, aliquet massa et, accumsan nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In lacinia turpis in est gravida malesuada. Quisque lacinia eget nisi imperdiet dapibus. Nunc eu dapibus est. Aliquam non enim nec metus accumsan porta non sed nisi. Pellentesque dictum in urna nec eleifend. Morbi commodo pellentesque iaculis. Donec consequat bibendum ullamcorper. Sed a orci vel nibh tincidunt cursus. Integer id accumsan libero. Morbi ut consequat justo. Aenean blandit molestie erat nec posuere.
            </p>

           
        </div>
    )

}

export default ModalPage;