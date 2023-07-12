# bottle-letter-fe

## 기술 스택

### TypeScript

인터프리터 언어인 JavaScript의 단점을 보완하기 위해 만들어진 정적 타입 언어로 컴파일 시점에 타입을 검사하여 사전에 오류를 방지할 수 있다.
따라서 코드의 안정성을 높이고, 가독성을 높이며, 개발 생산성을 높일 수 있다.

### React

순수 JavaScript보다 더욱 쉽게 UI를 구성할 수 있도록 도와주는 라이브러리로 컴포넌트 기반으로 UI를 구성할 수 있다.
다른 Vue, Angular와 같은 프레임워크와 비교했을 때, 가장 많은 사용자를 보유하고 있으며, 커뮤니티가 활발하다.
솔직히 말해서 사용하지 않을 이유가 없는 것도 사실인 것 같다.

### React Router

React에서 라우팅을 구현할 수 있도록 도와주는 라이브러리로 현재 기획 단계에서는 약 4개의 페이지 정도로 구성될 것으로 예상되기 때문에,
React Router를 사용하여 라우팅을 구현할 예정이다.

### React Query(Tanstack Query)

React에서 API를 호출할 때 사용하는 라이브러리로, 기존의 Redux-Saga, Redux-Thunk와 같은 라이브러리보다 사용하기 쉽고,
코드의 가독성을 높일 수 있다. 또한, 캐싱 기능을 제공하기 때문에, API 호출을 최소화할 수 있다.

### Emotion

CSS-in-JS 라이브러리로, CSS를 JavaScript에서 작성할 수 있도록 도와준다. 따라서, CSS를 작성할 때 발생할 수 있는
클래스 네이밍 충돌을 방지할 수 있으며, CSS를 작성할 때 발생할 수 있는 브라우저 호환성 문제를 해결할 수 있다.

styled-components를 사용하지 않고 Emotion을 사용하는 이유
- Emotion이 일반적으로 styled-components보다 더 빠른 렌더링 속도와 더 낮은 메모리 사용량을 가지고 있다. 
- Emotion의 css props 기능: Mantine UI를 사용할 예정인데, 개인적으로 Emotion의 css props가 좀더 커스텀한 UI를 구현할 때 유용하다고 생각한다.

### Mantine UI

React에서 사용할 수 있는 UI 라이브러리로, Material UI와 같은 라이브러리보다 더욱 가볍고 커스텀하기 쉽다.
또, TypeScript를 지원하고 Emotion에 기반하여 만들어졌기 때문에 사용하기 편리할 것이라 생각했다. 
제일 중요했던 건 소스코드가 정말 깔끔하게 정리되어서 공개되어있다는 점이었다. 각 컴포넌트에 대한 코드가 상세하게 공개되어있어 학습하기 좋을 것이라 생각했다.

### Jest

React에서 테스트를 작성할 때 사용하는 라이브러리로, 기존의 Mocha, Chai와 같은 라이브러리보다 더욱 사용하기 쉽고, 가독성이 높다.
또한, React Testing Library와 함께 사용할 때 더욱 편리하다.

### React Testing Library

React에서 테스트를 작성할 때 사용하는 라이브러리로, 기존의 Enzyme(에어비앤비에서 개발한 React Testing tool)보다 더욱 사용하기 쉽고, 가독성이 높다.
무엇보다 사용자의 관점에서 테스트를 작성할 수 있기 때문에, 사용자의 행동을 테스트하기에 더욱 적합하다.

ex. h1 태그에서 h2로 변경되었을 때, Enzyme을 사용하면 h1 태그가 존재하지 않기에 테스트가 실패하지만,
React Testing Library를 사용하면 사용자의 관점에서 테스트하기 때문에, h1 태그가 존재하지 않아도 테스트가 통과한다.
(사용자의 입장에선 지금 페이지의 heading이 h1 태그인지 h2 태그인지는 중요하지 않다. 그저 heading이 존재하여 어떤 내용을 담고 있는지만 알면 된다.)

storybook을 사용하지 않고 React Testing Library를 사용하는 이유
- storybook은 컴포넌트의 UI를 테스트하기 위한 라이브러리이다. 하지만, React Testing Library는 사용자의 관점에서 테스트하기 위한 라이브러리이다.
- Mantine UI를 사용할 예정이기 때문에, story를 작성하여 얻는 이점이 크지 않다고 생각했다.