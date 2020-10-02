require "application_system_test_case"

class CharacterClassesTest < ApplicationSystemTestCase
  setup do
    @character_class = character_classes(:one)
  end

  test "visiting the index" do
    visit character_classes_url
    assert_selector "h1", text: "Character Classes"
  end

  test "creating a Character class" do
    visit character_classes_url
    click_on "New Character Class"

    fill_in "Card back", with: @character_class.card_back
    fill_in "Character abbreviation", with: @character_class.character_abbreviation
    fill_in "Hand size", with: @character_class.hand_size
    fill_in "Health", with: @character_class.health
    fill_in "Icon image", with: @character_class.icon_image
    fill_in "Image", with: @character_class.image
    check "Is locked" if @character_class.is_locked
    fill_in "Name", with: @character_class.name
    fill_in "Plaque", with: @character_class.plaque
    fill_in "Symbol", with: @character_class.symbol
    click_on "Create Character class"

    assert_text "Character class was successfully created"
    click_on "Back"
  end

  test "updating a Character class" do
    visit character_classes_url
    click_on "Edit", match: :first

    fill_in "Card back", with: @character_class.card_back
    fill_in "Character abbreviation", with: @character_class.character_abbreviation
    fill_in "Hand size", with: @character_class.hand_size
    fill_in "Health", with: @character_class.health
    fill_in "Icon image", with: @character_class.icon_image
    fill_in "Image", with: @character_class.image
    check "Is locked" if @character_class.is_locked
    fill_in "Name", with: @character_class.name
    fill_in "Plaque", with: @character_class.plaque
    fill_in "Symbol", with: @character_class.symbol
    click_on "Update Character class"

    assert_text "Character class was successfully updated"
    click_on "Back"
  end

  test "destroying a Character class" do
    visit character_classes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Character class was successfully destroyed"
  end
end
