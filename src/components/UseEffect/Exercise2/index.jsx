//* LIB
import { useEffect, useState } from 'react';
//* SCSS
import './style.scss';

const Exercise2 = () => {
  const [scroll, setScroll] = useState(0);
  const HandleScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScroll(scrolled);
  };
  useEffect(() => {
    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll);
    };
  }, []);
  return (
    <>
      <section className="container">
        <h1 className="container__header">Execrise 2</h1>
        <div className="container__warpper">
          <div className="container__warpper__title">
            <h1>Câu chuyện 3 lưỡi rìu</h1>
          </div>
          <div className="container__warpper__content">
            <div className="container__warpper__content__main-scroll">
              <div
                className="container__warpper__content__main-scroll__style"
                style={{ height: `${scroll}%` }}
              ></div>
            </div>
            <div className="container__warpper__content__text">
              <p>
                Câu chuyện ba lưỡi rìu là câu chuyện cổ tích thế tục Việt Nam vô cùng ý nghĩa kể về
                một chàng tiều phu mặc dù rất nghèo nhưng có lòng trung thực trong mọi hoàn cảnh và
                cuối cùng chính sự trung thực trong cuộc sống đó, chàng tiều phu nhận được những đền
                đáp xứng đáng.
              </p>
              <p>
                Ngày xửa ngày xưa, ở một ngôi làng nọ, có một anh chàng tiều phu nghèo, cha mẹ anh
                bệnh nặng nên qua đời sớm, anh phải sống mồ côi cha mẹ từ nhỏ và tài sản của anh chỉ
                có một chiếc rìu. Hàng ngày anh phải xách rìu vào rừng để đốn củi bán để lấy tiền
                kiếm sống qua ngày. Ngay ở cạnh bìa rừng có một con sông nước chảy rất xiết, ai đó
                lỡ trượt chân rơi xuống sông thì rất khó bơi vào bờ.
              </p>
              <p>
                Vào một hôm nọ, như thường ngày chàng tiều phu vác rìu vào rừng để đốn củi, trong
                lúc đang chặt củi cạnh bờ sông thì chẳng may chiếc rìu của chàng bị gãy cán và lưỡi
                rìu văng xuống sông. Vì dòng sông nước chảy quá xiết nên mặc dù biết bơi nhưng anh
                chàng vẫn không thể xuống sông để tìm lưỡi rìu. Thất vọng anh chàng tiều phu ngồi
                khóc, vừa khóc anh chàng vừa than thở cho số phận hẩm hiu của mình.
              </p>
              <p>
                Bỗng từ đâu đó có một ông cụ tóc trắng bạc phơ, râu dài, đôi mắt rất hiền từ xuất
                hiện trước mặt chàng, ông cụ nhìn chàng tiêu phu và hỏi:
              </p>
              <p>- Chào con, con đang có chuyện gì mà ta thấy con khóc và buồn bã như vậy?</p>
              <p>Anh chàng tiều phu trả lời ông cụ râu tóc bạc phơ đó:</p>
              <p>
                - Thưa cụ, bố mẹ con mất sớm, con phải sống mồ côi từ nhỏ, gia cảnh nhà cháu rất
                nghèo, tài sản duy nhất của con là chiếc rìu sắt mà bố mẹ cháu trước lúc qua đời để
                lại. Có chiếc rìu đó cháu còn vào rừng đốn củi kiếm sống qua ngày, giờ đây nó đã bị
                rơi xuống sông, con không biết lấy gì để kiếm sống qua ngày nữa. Vì vậy, con buồn
                lắm cụ ạ!
              </p>
              <p>Ông cụ liền đáp lời chàng tiều phu:</p>
              <p>
                - Ta tưởng chuyện gì lớn, cháu đừng khóc nữa, để ta lặn xuống sông lấy hộ cháu chiếc
                rìu lên.
              </p>
              <p>
                Dứt lời, ông cụ lao mình xuống dòng sông đang chảy rất xiết. Một lúc sau, ông cụ
                ngoi lên khỏi mặt nước tay cầm một chiếc rìu bằng bạc sáng loáng và hỏi anh chàng
                tiều phu nghèo:
              </p>
              <p>- Đây có phải lưỡi rìu mà con đã làm rơi xuống không ?</p>
              <p>
                Anh chàng tiều phu nhìn lưỡi rìu bằng bạc thấy không phải của mình nên anh lắc đầu
                và bảo ông cụ:
              </p>
              <p>- Không phải lưỡi rìu của con cụ ạ, lưỡi rìu của con bằng sắt cơ.</p>
              <p>
                Lần thứ hai, ông cụ lại lao mình xuống dòng sông chảy xiết để tìm chiếc rìu cho
                chàng tiều phu. Một lúc sau, ông cụ ngoi lên khỏi mặt nước tay cầm chiếc rìu bằng
                vàng và hỏi chàng tiều phu:
              </p>
              <p>- Đây có phải là lưỡi rìu mà con đã sơ ý làm rơi xuống sông không?</p>
              <p>Anh chàng tiều phu nhìn lưỡi rìu bằng vàng sáng chói, anh lại lắc đầu và bảo:</p>
              <p>- Không phải là lưỡi rìu của con cụ ạ!</p>
              <p>
                Lần thứ ba, ông cụ lại lao mình xuống sông và lần này khi lên ông cụ cầm trên tay là
                chiếc rìu bằng sắt của anh chàng tiều phu đánh rơi. Ông cụ lại hỏi:
              </p>
              <p>- Vậy đây có phải là lưỡi rìu của con không!</p>
              <p>Thấy đúng là lưỡi rìu của mình rồi, anh chàng tiều phu reo lên sung sướng:</p>
              <p>
                - Vâng cụ, đây đúng là lưỡi rìu của con, con cảm ơn cụ đã tìm hộ con lưỡi rìu để con
                có cái đốn củi kiếm sống qua ngày.
              </p>
              <p>Ông cụ đưa cho anh chàng tiều phu lưỡi rìu bằng sắt của anh và khen:</p>
              <p>
                - Con quả là người thật thà và trung thực, không hề ham tiền bạc và lợi lộc. Nay ta
                tặng thêm cho con hai lưỡi rìu bằng vàng và bạc này. Đây là quà ta tặng con, con cứ
                vui vẻ nhận.
              </p>
              <p>
                Anh chàng tiều phu vui vẻ đỡ lấy hai lưỡi rìu mà ông cụ tặng và cảm tạ. Ông cụ hóa
                phép và biến mất. Lúc đó anh chàng tiều phu mới biết rằng mình vừa được bụt giúp đỡ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exercise2;
