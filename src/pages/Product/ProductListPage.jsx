import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Grid, Pagination, Paper } from '@mui/material'
import ProductFilters from './components/ProductFilters'
import ProductSort from './components/ProductSort'
import FilterViewer from './components/FilterViewer'
import ProductSkeletonList from './components/ProductSkeletonList'
import ProductList from '../Home/components/ProductList'

ProductListPage.propTypes = {}

function ProductListPage(props) {
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters
                filters={filters}
                onChange={handleFilterChange}
              ></ProductFilters>
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />

              <FilterViewer filters={filters} />
              {loading ? (
                <ProductSkeletonList length={9} />
              ) : (
                <ProductList data={productList} />
              )}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductListPage
