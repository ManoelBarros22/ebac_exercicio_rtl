import { render, screen } from '@testing-library/react'
import Post from '..'

describe('Teste para o component Post', () => {
  test('Deve renderizar corretamente', () => {
    render(<Post imageUrl="https://via.placeholder.com/200x200">Testando</Post>)
    expect(screen.getByText('Testando')).toBeInTheDocument()
  })
})

// import { render, screen } from '@testing-library/react';
// import Post from '.';

// describe('Test <Post />', () => {
//     it('Expect render correctly', () => {
//         render(
//             <Post imageUrl="https://via.placeholder.com/200x200">
//                 Teste
//             </Post>
//         );
//         expect(screen.getByText('Teste')).toBeInTheDocument();
//     });
// })
