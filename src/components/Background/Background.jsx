function Background() {
  return (
    <div 
      className="background" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(160deg, #0a041a 0%, #12062b 100%)',
        zIndex: 0
      }}
    />
  );
}

export default Background;