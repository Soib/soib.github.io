import { motion } from "framer-motion";

interface IShowIcon {
  icon: React.ReactNode;
  link?: string;
  animation?: boolean;
}

const ShowIcon: React.FC<IShowIcon> = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: [1.2, 1.0],
        rotate: [0, 360],
        borderRadius: ["20%", "50%"],
      }}
      transition={{ duration: 0.5 }}
      className="icon-box"
      onClick={() => window.open(props.link, "_blank")}
    >
      {props.icon}
    </motion.div>
  );
};

export default ShowIcon;
