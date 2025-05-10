const HorizontalCurveText = ({
    text = "ສະບາຍດີ ແຂວງຄຳມວ່ນ ຍິນດີຕອ້ນຮັບ",
    fontSize = 40,
    curveHeight = 50, // ยิ่งมาก ยิ่งโค้ง
  }) => {
    const pathId = "wavePath";
  
    return (
      <div className="flex justify-center items-center h-48">
        <svg width="100%" height="100" viewBox="0 0 600 100" className="text-yellow-300">
          <defs>
            <path
              id={pathId}
              d={`
                M 50,${50 + curveHeight}
                Q 300,${50 - curveHeight}
                  550,${50 + curveHeight}
              `}
              fill="transparent"
            />
          </defs>
          <text fill="currentColor" fontSize={fontSize} fontWeight="500">
            <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    );
  };
  
  export default HorizontalCurveText;
  