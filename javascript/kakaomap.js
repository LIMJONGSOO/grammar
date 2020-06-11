// 카카오맵 API 가이드
// 이 테스트에서는 카카오 맵에서 제공하는 JavaScript API 중, 아래에 명시된 API를 사용할 수 있습니다.
//  (BundangguMap.js에서 사용하는 API이외에 다른 카카오맵 API이용은 금지되니 참고해 주세요.)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 1. 지도에 마커/인포윈도우 그리기
// 마커 이미지를 만들기 위한 new kakao.maps.MarkerImage
// 마커를 만들기 위한 new kakao.maps.Marker

// 마커가 표시될 좌표 배열입니다
var makerPositions = [
  new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
  new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
  new kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
];

var markerImageSrc =
  "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/competition-imgs/2020_kakao_challenge/marker-green.png"; // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
(markers = []), //마커 객체를 가지고 있을 배열입니다
  createMarkers(); // 마커를 생성하고 마커 배열에 추가합니다
changeMarker("coffee"); // 지도에 마커가 보이도록 설정합니다

// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
  var markerImage = new kakao.maps.MarkerImage(src, size, options);
  return markerImage;
}

// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image) {
  var marker = new kakao.maps.Marker({
    position: position,
    image: image,
  });

  return marker;
}

class createMarkers {
  markers = [];
  constructor() {
    for (var i = 0; i < coffeePositions.length; i++) {
      var imageSize = new kakao.maps.Size(22, 26),
        imageOptions = {
          spriteOrigin: new kakao.maps.Point(10, 0),
          spriteSize: new kakao.maps.Size(36, 98),
        };

      // 마커이미지와 마커를 생성합니다
      var markerImage = createMarkerImage(
          markerImageSrc,
          imageSize,
          imageOptions
        ),
        marker = createMarker(makerPositions[i], markerImage);

      // 생성된 마커를 마커 배열에 추가합니다
      markers.push(marker);
    }
  }
}

// 커피숍 마커를 생성하고 커피숍 마커 배열에 추가하는 함수입니다
function createMarkers() {
  for (var i = 0; i < coffeePositions.length; i++) {
    var imageSize = new kakao.maps.Size(22, 26),
      imageOptions = {
        spriteOrigin: new kakao.maps.Point(10, 0),
        spriteSize: new kakao.maps.Size(36, 98),
      };

    // 마커이미지와 마커를 생성합니다
    var markerImage = createMarkerImage(
        markerImageSrc,
        imageSize,
        imageOptions
      ),
      marker = createMarker(makerPositions[i], markerImage);

    // 생성된 마커를 마커 배열에 추가합니다
    coffeeMarkers.push(marker);
  }
}

// 마커들의 지도 표시 여부를 설정하는 함수입니다
function setMarkers(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
function changeMarker(type) {
  var coffeeMenu = document.getElementById("coffeeMenu");

  // 커피숍 카테고리가 클릭됐을 때
  if (type === "coffee") {
    // 커피숍 카테고리를 선택된 스타일로 변경하고
    coffeeMenu.className = "menu_selected";

    // 커피숍 마커들만 지도에 표시하도록 설정합니다
    setMarkers(map);
  } else {
    setMarkers(null);
  }
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 인포윈도우를 만들기 위한 new kakao.maps.InfoWindow

// 지도에 올릴 장소명 인포윈도우 입니다.
var mLabel = new kakao.maps.InfoWindow({
  position: mapCenter, // 지도의 중심좌표에 올립니다.
  content: "스페이스 닷원", // 인포윈도우 내부에 들어갈 컨텐츠 입니다.
});
mLabel.open(map, mMarker);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 2. 지도 객체에서 사용 가능한 메소드
// setCenter: 지도 중심 위치 설정
// getBounds: 지도가 그리고 있는 영역 획득
// bounds 객체에서 좌표를 획득하기 위한 getSouthWest, getLat, getLng까지 이용 가능
// getLevel: 지도의 줌 레벨 획득

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.498004414546934, 127.02770621963765), // 지도의 중심좌표
    level: 4, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

this.map.setCenter(new kakao.maps.LatLng(37.4020288, 127.1066516));
this.map.getLevel(); // 4
var sw = bounds.getSouthWest();
sw.getLat(), sw.getLng();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 3. 이용 가능 이벤트
// 지도 위치 변경: 카카오맵에서 지도 위치 변경을 인식할 수 있는 방법은 여러가지가 있지만,
// 이 과제를 수행하면서는 반드시 drag이벤트를 통해 지도 위치 변경을 처리해 주세요.
// (dragend, dragstart 이벤트는 코드에서 사용해서는 안됩니다)
// 지도 줌 레벨 변경
kakao.maps.event.addListener(this.map, "zoom_changed", () => {});

kakao.maps.event.addListener(this.map, "drag", () => {});
