import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import ShopeeLogo from '../../images/ShopeeLogo.png'

import Container from '../common/Container'

const StyledHeader = styled.header`
  background-color: #d1011c;
  width: 100vw;
  padding: 16px 0;
`

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navigator = styled.div`
  a {
    margin: 0px 4px;
    color: white;
    text-decoration: none;
  }
`

const Toolbar = styled.div`
  a {
    margin: 0px 6px;
    color: white;
    text-decoration: none;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const Header = () => {
  const { Search } = Input
  const onSearch = (value) => { console.log(value) }

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderSection>
          <Navigator>
            <a href='#1'>蝦皮購物</a>
            <a href='#1'>下載</a>
            <a href='#1'>追蹤我們</a>
            <a href='#1'>部落格</a>
          </Navigator>
          <Toolbar>
            <a href='#1'>通知</a>
            <a href='#1'>幫助中心</a>
            <a href='#1'>帳號</a>
          </Toolbar>
        </StyledHeaderSection>
        <StyledHeaderSection>
          <Link to='/'>
            <img src={ShopeeLogo} alt='logo' height={38} />
          </Link>
          <Flex>
            <Search
              placeholder='在商城搜尋'
              onSearch={onSearch}
              enterButton
              style={{ marginRight: 8 }}
            />
            <Link to='/cart'>
              <ShoppingCartOutlined style={{ fontSize: '28px', color: 'white' }} />
            </Link>
          </Flex>
        </StyledHeaderSection>
      </Container>
    </StyledHeader>
  )
}

export default Header
