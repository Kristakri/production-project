import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
  },
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet, a minima dignissimos laboriosam at veniam quia obcaecati reprehenderit molestiae exercitationem temporibus ipsum est labore quod adipisci in iure omnis. Animi, nisi! Aspernatur vero dignissimos, harum nostrum a laboriosam doloribus recusandae tenetur accusamus quae. Labore est numquam ipsa et possimus iusto error saepe illum adipisci alias eaque doloribus, officia repudiandae blanditiis quis. Quis explicabo accusantium facilis consequatur natus praesentium? Nam sequi tempora sunt nisi libero ipsam ad tempore atque vitae. Architecto cumque minus, iusto, omnis fugiat consequuntur ad quisquam saepe dolores consequatur nemo soluta aspernatur suscipit debitis, ipsa odit autem.'
  }
}

export default meta

type Story = StoryObj<typeof Modal>

export const Light: Story = {

}

export const Dark: Story = {
  decorators: withThemeDecorator(Theme.DARK)
}
