// actions
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

// action creator
export function createBucket(bucket) {
  console.log("액션객체 생성");
  return { type: CREATE, bucket: bucket };
}

export function deleteBucket(payload) {
  console.log("액션객체 생성");
  return { type: DELETE, payload: payload };
}

// initial state
const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"],
};

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      console.log("리듀서 실행");
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    case "bucket/DELETE": {
      console.log("리듀서 실행");
      console.log(state);
    }
    default:
      return state;
  }
}

// export
