import { motion, useDragControls } from 'framer-motion'

const Index = () => {
  const controls = useDragControls()

  return (
    <div className="w-screen h-screen bg-black">
      <motion.div
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
        drag
        dragControls={controls}
        className="bg-orange-500 h-5 w-5"></motion.div>
    </div>
  )
}

export default Index