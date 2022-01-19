import Img from 'next/image'

// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75
  }
  return `https://images.dmaloy97.workers.dev?width=${width}&quality=${quality}&image=https://dollon.dev${src}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={cloudflareImageLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}

const Image = (props) => {
  if (process.env.NODE_ENV === 'development') {
    return <Img unoptimized={true} {...props} />
  } else {
    return <Img {...props} loader={cloudflareImageLoader} />
  }
}

export default Image