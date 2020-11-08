require "application_system_test_case"

class EnhancementsTest < ApplicationSystemTestCase
  setup do
    @enhancement = enhancements(:one)
  end

  test "visiting the index" do
    visit enhancements_url
    assert_selector "h1", text: "Enhancements"
  end

  test "creating a Enhancement" do
    visit enhancements_url
    click_on "New Enhancement"

    fill_in "Description", with: @enhancement.description
    click_on "Create Enhancement"

    assert_text "Enhancement was successfully created"
    click_on "Back"
  end

  test "updating a Enhancement" do
    visit enhancements_url
    click_on "Edit", match: :first

    fill_in "Description", with: @enhancement.description
    click_on "Update Enhancement"

    assert_text "Enhancement was successfully updated"
    click_on "Back"
  end

  test "destroying a Enhancement" do
    visit enhancements_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Enhancement was successfully destroyed"
  end
end
