const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in-slow"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/dfc76d6c-2d4b-40fe-886c-df90e3cc2bd5/files/8e111f46-c741-4637-99e1-9898128733f6.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
          <h1 className="font-montserrat text-6xl md:text-8xl lg:text-9xl font-light text-white drop-shadow-2xl mb-6 tracking-wide">
            Мы закрылись
          </h1>
          <div className="h-1 w-32 mx-auto bg-white/60 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Index;
