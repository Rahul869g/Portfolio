function Project({ href, src, projectTitle }) {
  return (
    <div className="block w-[300px] m-auto">
      <a
        className="block overflow-hidden w-[300px] h-60 rounded-[15px]"
        target="_blank"
        href={href}
      >
        <img
          className="object-contain w-[300px] transition-all duration-[0.2s] ease-[ease-in] hover:scale-[1.2]"
          src={src}
        />
      </a>
      <p className="text-white text-center text-xl">{projectTitle}</p>
    </div>
  );
}

export default Project;
