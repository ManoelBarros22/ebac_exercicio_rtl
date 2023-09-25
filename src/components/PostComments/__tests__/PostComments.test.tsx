import PostComments from '..'

import { fireEvent, render, screen } from '@testing-library/react'

describe('Deve renderizar o componente PostComment corretamente', () => {
  test('Deve renderizar o componente corretamente', () => {
    render(<PostComments />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })

  test('Deve adicionar um comentário', () => {
    render(<PostComments />)

    fireEvent.change(screen.getByTestId('area-comment'), {
      target: {
        value: 'Primeiro comentário adicionado'
      }
    })
    fireEvent.click(screen.getByTestId('button-comment'))

    fireEvent.change(screen.getByTestId('area-comment'), {
      target: {
        value: 'Segundo comentário adicionado'
      }
    })
    fireEvent.click(screen.getByTestId('button-comment'))

    expect(screen.getAllByTestId('container-comment')).toHaveLength(2)
  })
})
